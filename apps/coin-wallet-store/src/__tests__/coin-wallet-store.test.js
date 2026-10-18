import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { CustomerRepository, Database } from '@youpi/db';
import { startServer as startPaymentApi } from '../../../payment-api/src/index.js';
import { startCoinWalletStore } from '../index.js';
import { generateHmac } from '@youpi/common';

describe('Coin Top-Up Wallet Demo Store Integration Tests', () => {
  let apiInstance;
  let storeInstance;
  let storeBaseUrl;
  let testDb;
  const sentEmails = [];
  const sentWhatsAppMessages = [];
  const storeSecret = 'wallet_store_secret_9988';

  before(async () => {
    testDb = new Database({ inMemory: true });
    apiInstance = await startPaymentApi(6193, testDb);

    // Update demo merchant with our store webhook secret
    testDb.execute('UPDATE merchants SET webhook_secret = ?, webhook_url = ? WHERE id = ?', [
      storeSecret,
      'http://localhost:5099/api/webhook',
      '00000000-0000-0000-0000-000000000001'
    ]);

    storeInstance = await startCoinWalletStore(5099, {
      gatewayApiUrl: `http://localhost:${apiInstance.port}`,
      merchantId: '00000000-0000-0000-0000-000000000001',
      webhookSecret: storeSecret,
      emailSender: async message => sentEmails.push(message),
      whatsappSender: async (to, message) => sentWhatsAppMessages.push({ to, message })
    });

    storeBaseUrl = `http://localhost:${storeInstance.port}`;
  });

  after(async () => {
    await storeInstance.close();
    await apiInstance.close();
    testDb.close();
  });

  function request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, storeBaseUrl);
      const req = http.request(url, {
        method: options.method || 'GET',
        headers: options.headers || {}
      }, res => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          let body;
          try {
            body = JSON.parse(data);
          } catch {
            body = data;
          }
          resolve({ status: res.statusCode, headers: res.headers, body });
        });
      });

      req.on('error', reject);
      if (options.body) {
        const payload = typeof options.body === 'string' ? options.body : JSON.stringify(options.body);
        req.setHeader('Content-Type', 'application/json');
        req.write(payload);
      }
      req.end();
    });
  }

  test('GET /health returns UP and initial balance', async () => {
    const res = await request('/health');
    assert.equal(res.status, 200);
    assert.equal(res.body.status, 'UP');
    assert.equal(res.body.coins, 50);
  });

  test('GET / renders YOUPI Store product page with gateway showcase and demo checkout', async () => {
    const res = await request('/');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('Self-Hosted UPI Payment Gateway'));
    assert.ok(res.body.includes('₹1.00'));
    assert.ok(res.body.includes('/assets/gateway_pc_checkout.png'));
  });

  test('POST /api/checkout initiates payment gateway session and returns checkoutUrl', async () => {
    const checkoutRes = await request('/api/checkout', {
      method: 'POST',
      body: {
        packName: 'Gamer Pack',
        coins: 550,
        price: 449.00,
        phoneNumber: '9876543210',
        gamerTag: 'ViperX'
      }
    });

    assert.equal(checkoutRes.status, 200);
    assert.ok(checkoutRes.body.orderId.startsWith('COIN-ORD-'));
    assert.ok(checkoutRes.body.paymentId);
    assert.ok(checkoutRes.body.checkoutUrl.includes('/checkout/'));
    const createdPayment = await storeInstance.server.paymentClient.getPayment(checkoutRes.body.paymentId);
    assert.equal(createdPayment.metadata.coins, 449);
  });

  test('POST /api/webhook processes signed SUCCESS event and credits wallet coins', async () => {
    const initialCoins = storeInstance.server.walletCoins;

    const payloadObj = {
      event: 'SUCCESS',
      paymentId: 'pay_coin_test_123',
      orderId: 'COIN-ORD-555',
      amount: '449.00',
      amountPaise: 44900,
      currency: 'INR',
      method: 'UPI',
      metadata: {
        coins: 449,
        packName: 'Gamer Pack'
      }
    };

    const payloadString = JSON.stringify(payloadObj);
    const signature = generateHmac(payloadString, storeSecret);

    const hookRes = await request('/api/webhook', {
      method: 'POST',
      headers: {
        'X-Gateway-Signature': `sha256=${signature}`
      },
      body: payloadString
    });

    assert.equal(hookRes.status, 200);
    assert.equal(hookRes.body.credited, true);

    // Verify coins were credited to wallet!
    assert.equal(storeInstance.server.walletCoins, initialCoins + 449);

    // Verify recorded in ledger
    const balanceRes = await request('/api/wallet-balance');
    assert.equal(balanceRes.body.coins, initialCoins + 449);
    assert.ok(balanceRes.body.history.length >= 1);
    assert.equal(balanceRes.body.history[0].orderId, 'COIN-ORD-555');
  });

  test('verified payment sends customer receipt by email and WhatsApp once', async () => {
    sentEmails.length = 0;
    sentWhatsAppMessages.length = 0;

    const customer = new CustomerRepository(testDb).create({
      name: 'Asha Rao',
      email: 'asha@example.com',
      mobileNumber: '9876543210'
    });
    const orderId = `COIN-ORD-NOTIFY-${Date.now()}`;
    const paymentResponse = await fetch(`http://localhost:${apiInstance.port}/api/v1/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Id': '00000000-0000-0000-0000-000000000001'
      },
      body: JSON.stringify({
        orderId,
        amount: '145.00',
        currency: 'INR',
        customerId: customer.id,
        metadata: { coins: 145, packName: 'Gamer Pack', productCode: 'GAME-145' }
      })
    });
    assert.equal(paymentResponse.status, 201);
    const payment = await paymentResponse.json();

    const payloadString = JSON.stringify({
      event: 'SUCCESS',
      paymentId: payment.paymentId,
      orderId,
      amount: '145.00',
      amountPaise: 14500,
      currency: 'INR',
      method: 'UPI',
      utr: '123456789012',
      completedAt: '2026-10-18T07:45:00.000Z',
      metadata: { coins: 145, packName: 'Gamer Pack', productCode: 'GAME-145' }
    });
    const signature = generateHmac(payloadString, storeSecret);
    const webhook = await request('/api/webhook', {
      method: 'POST',
      headers: { 'X-Gateway-Signature': `sha256=${signature}` },
      body: payloadString
    });

    assert.equal(webhook.status, 200);
    assert.deepEqual(webhook.body.notifications, { email: 'sent', whatsapp: 'sent' });
    assert.equal(sentEmails.length, 1);
    assert.equal(sentEmails[0].to, customer.email);
    assert.match(sentEmails[0].subject, new RegExp(orderId));
    assert.match(sentEmails[0].html, /asha@example\.com/);
    assert.match(sentEmails[0].html, /123456789012/);
    assert.match(sentEmails[0].html, /GAME-145/);
    assert.equal(Object.hasOwn(sentEmails[0], 'text'), false);
    assert.equal(sentWhatsAppMessages.length, 1);
    assert.equal(sentWhatsAppMessages[0].to, customer.mobileNumber);
    assert.match(sentWhatsAppMessages[0].message, new RegExp(orderId));
    assert.match(sentWhatsAppMessages[0].message, /14500|145\.00/);
    assert.match(sentWhatsAppMessages[0].message, /123456789012/);

    const duplicateWebhook = await request('/api/webhook', {
      method: 'POST',
      headers: { 'X-Gateway-Signature': `sha256=${signature}` },
      body: payloadString
    });
    assert.equal(duplicateWebhook.status, 200);
    assert.equal(sentEmails.length, 1);
    assert.equal(sentWhatsAppMessages.length, 1);
  });

  test('verified cancellation sends HTML email and WhatsApp once without crediting coins', async () => {
    sentEmails.length = 0;
    sentWhatsAppMessages.length = 0;
    const initialCoins = storeInstance.server.walletCoins;
    const customer = new CustomerRepository(testDb).create({
      name: 'Mina <Merchant>',
      email: 'mina@example.com',
      mobileNumber: '9876543211'
    });
    const orderId = `COIN-ORD-CANCEL-${Date.now()}`;
    const paymentResponse = await fetch(`http://localhost:${apiInstance.port}/api/v1/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Merchant-Id': '00000000-0000-0000-0000-000000000001'
      },
      body: JSON.stringify({
        orderId,
        amount: '75.00',
        currency: 'INR',
        customerId: customer.id,
        metadata: { packName: 'Starter Pack', coins: 75 }
      })
    });
    assert.equal(paymentResponse.status, 201);
    const payment = await paymentResponse.json();
    const payloadString = JSON.stringify({
      event: 'CANCELLED',
      paymentId: payment.paymentId,
      orderId,
      amount: '75.00',
      amountPaise: 7500,
      currency: 'INR',
      method: 'UPI',
      metadata: { packName: 'Starter Pack', coins: 75 }
    });
    const signature = generateHmac(payloadString, storeSecret);

    const cancellation = await request('/api/webhook', {
      method: 'POST',
      headers: { 'X-Gateway-Signature': `sha256=${signature}` },
      body: payloadString
    });

    assert.equal(cancellation.status, 200);
    assert.deepEqual(cancellation.body.notifications, { email: 'sent', whatsapp: 'sent' });
    assert.equal(storeInstance.server.walletCoins, initialCoins);
    assert.equal(sentEmails.length, 1);
    assert.equal(sentEmails[0].to, customer.email);
    assert.match(sentEmails[0].subject, /cancelled/i);
    assert.match(sentEmails[0].html, /Payment cancelled/i);
    assert.match(sentEmails[0].html, /Mina &lt;Merchant&gt;/);
    assert.match(sentEmails[0].html, new RegExp(orderId));
    assert.equal(Object.hasOwn(sentEmails[0], 'text'), false);
    assert.equal(sentWhatsAppMessages.length, 1);
    assert.match(sentWhatsAppMessages[0].message, /payment cancelled/i);

    const duplicate = await request('/api/webhook', {
      method: 'POST',
      headers: { 'X-Gateway-Signature': `sha256=${signature}` },
      body: payloadString
    });
    assert.equal(duplicate.status, 200);
    assert.equal(sentEmails.length, 1);
    assert.equal(sentWhatsAppMessages.length, 1);
  });

  test('POST /api/webhook rejects fraudulent signature', async () => {
    const payloadString = JSON.stringify({ event: 'SUCCESS', orderId: 'FAKE' });
    const hookRes = await request('/api/webhook', {
      method: 'POST',
      headers: {
        'X-Gateway-Signature': 'sha256=invalid_fake_signature_hash'
      },
      body: payloadString
    });

    assert.equal(hookRes.status, 400);
    assert.ok(hookRes.body.error.includes('signature mismatch'));
  });

  test('POST /api/webhook rejects signed SUCCESS events without an order ID', async () => {
    const initialCoins = storeInstance.server.walletCoins;
    const payloadString = JSON.stringify({
      event: 'SUCCESS',
      metadata: { coins: 100, packName: 'Coin Pack' }
    });
    const signature = generateHmac(payloadString, storeSecret);

    const hookRes = await request('/api/webhook', {
      method: 'POST',
      headers: { 'X-Gateway-Signature': `sha256=${signature}` },
      body: payloadString
    });

    assert.equal(hookRes.status, 400);
    assert.match(hookRes.body.error, /orderId/i);
    assert.equal(storeInstance.server.walletCoins, initialCoins);
  });

  test('GET /wallet renders wallet page with updated balance', async () => {
    const res = await request('/wallet?orderId=COIN-ORD-555');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('Customer Account') || res.body.includes('YOUPI Store'));
    assert.ok(res.body.includes('Top-Up Confirmed'));
    assert.ok(res.body.includes('Current Vault Balance'));
  });

  test('custom top-up: initiates custom amount payment and credits calculated coins on webhook', async () => {
    const initialCoins = storeInstance.server.walletCoins;
    const customAmount = 250.00;
    const customCoins = 250; // 1 rs = 1 coin

    const checkoutRes = await request('/api/checkout', {
      method: 'POST',
      body: {
        packName: 'Custom Top-Up',
        coins: customCoins,
        price: customAmount,
        phoneNumber: '9876543210',
        gamerTag: 'CustomGamer'
      }
    });

    assert.equal(checkoutRes.status, 200);
    assert.ok(checkoutRes.body.checkoutUrl);
    const orderId = checkoutRes.body.orderId;

    // Simulate signed webhook receipt
    const payloadObj = {
      event: 'SUCCESS',
      paymentId: checkoutRes.body.paymentId,
      orderId,
      amount: '250.00',
      amountPaise: 25000,
      currency: 'INR',
      method: 'UPI',
      metadata: {
        coins: customCoins,
        packName: 'Custom Top-Up'
      }
    };

    const payloadString = JSON.stringify(payloadObj);
    const signature = generateHmac(payloadString, storeSecret);

    const hookRes = await request('/api/webhook', {
      method: 'POST',
      headers: { 'X-Gateway-Signature': `sha256=${signature}` },
      body: payloadString
    });

    assert.equal(hookRes.status, 200);
    assert.equal(storeInstance.server.walletCoins, initialCoins + customCoins);
  });

  test('minimum amount: allows exactly ₹1.00 top-up and credits 1 coin', async () => {
    const initialCoins = storeInstance.server.walletCoins;

    const checkoutRes = await request('/api/checkout', {
      method: 'POST',
      body: {
        packName: 'Micro Top-Up',
        coins: 1,
        price: 1.00,
        phoneNumber: '9876543210'
      }
    });

    assert.equal(checkoutRes.status, 200);
    const orderId = checkoutRes.body.orderId;

    const payloadObj = {
      event: 'SUCCESS',
      paymentId: checkoutRes.body.paymentId,
      orderId,
      amount: '1.00',
      amountPaise: 100,
      currency: 'INR',
      method: 'UPI',
      metadata: { coins: 1, packName: 'Micro Top-Up' }
    };
    const payloadString = JSON.stringify(payloadObj);
    const signature = generateHmac(payloadString, storeSecret);

    const hookRes = await request('/api/webhook', {
      method: 'POST',
      headers: { 'X-Gateway-Signature': `sha256=${signature}` },
      body: payloadString
    });

    assert.equal(hookRes.status, 200);
    assert.equal(storeInstance.server.walletCoins, initialCoins + 1);
  });

  test('minimum amount: rejects top-up of less than ₹1.00', async () => {
    const checkoutRes = await request('/api/checkout', {
      method: 'POST',
      body: {
        packName: 'Zero Top-Up',
        coins: 0,
        price: 0.50
      }
    });

    assert.equal(checkoutRes.status, 400);
    assert.ok(checkoutRes.body.error.includes('Minimum top-up amount is ₹1.00'));
  });

  test('GET /order-failed renders failed order page with deep link to support', async () => {
    const res = await request('/order-failed?orderId=COIN-ORD-999&reason=FAILED&paymentId=pay_fail_123');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('Payment Unsuccessful'));
    assert.ok(res.body.includes('COIN-ORD-999'));
    assert.ok(res.body.includes('Contact Payment Support'));
    assert.ok(res.body.includes('Try Again'));
  });

  test('POST /api/verify-payment cannot credit coins from browser-controlled data', async () => {
    const initialCoins = storeInstance.server.walletCoins;
    const orderId = `COIN-ORD-POPUP-${Date.now()}`;

    const verifyRes = await request('/api/verify-payment', {
      method: 'POST',
      body: {
        orderId,
        coins: 100,
        packName: 'Starter Pack'
      }
    });

    assert.equal(verifyRes.status, 410);
    assert.match(verifyRes.body.error, /server-to-server webhook/i);
    assert.equal(storeInstance.server.walletCoins, initialCoins);
  });

  test('GET /order-success renders pending server verification status with checkout parameters', async () => {
    const res = await request('/order-success?order_id=ORD-SUCC-123&amount=499.00&utr=998877665544&mode=UPI');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('Payment Status Received'));
    assert.ok(res.body.includes('ORD-SUCC-123'));
    assert.ok(res.body.includes('499.00'));
    assert.ok(res.body.includes('998877665544'));
    assert.ok(res.body.includes('AWAITING SERVER VERIFICATION'));
  });

  test('GET /order-suspicious renders held for review security notice', async () => {
    const res = await request('/order-suspicious?order_id=ORD-SUSP-456');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('Payment Under Review'));
    assert.ok(res.body.includes('ORD-SUSP-456'));
    assert.ok(res.body.includes('SECURITY NOTICE'));
  });

  test('GET /order-expired renders expired session notice', async () => {
    const res = await request('/order-expired?order_id=ORD-EXP-789');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('Payment Session Expired'));
    assert.ok(res.body.includes('ORD-EXP-789'));
  });

  test('GET /order-cancelled renders cancelled session notice', async () => {
    const res = await request('/order-cancelled?order_id=ORD-CAN-000');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('Payment Cancelled'));
    assert.ok(res.body.includes('ORD-CAN-000'));
  });

  test('GET /youpi.js is served with CORS for universal frontend integration', async () => {
    const res = await request('/youpi.js');
    assert.equal(res.status, 200);
    assert.ok(res.body.includes('YoupiCheckout'));
    assert.ok(res.body.includes('data-youpi-pay'));
  });

  test('Reverse proxy: proxies /api/v1/* requests to payment API directly', async () => {
    const res = await request('/api/v1/health');
    assert.equal(res.status, 200);
    assert.equal(res.body.status, 'UP');
  });

  test('Reverse proxy: /checkout/* does not return 404 Route Not Found', async () => {
    const res = await request('/checkout/some-session-id');
    // It should either return 200/502 (if portal not up on that test port), but NEVER 404 "Route Not Found"
    assert.notEqual(res.body, 'Route Not Found');
  });
});
