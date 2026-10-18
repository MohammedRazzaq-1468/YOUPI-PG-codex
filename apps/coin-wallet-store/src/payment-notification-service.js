import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDirectory = path.join(__dirname, 'email-templates');

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function replaceTemplateTokens(template, values, escape = false) {
  return template.replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => {
    const value = values[key] ?? '';
    return escape ? escapeHtml(value) : String(value);
  });
}

function formatPaymentDetails(payment, customer) {
  const metadata = payment.metadata || {};
  return {
    CUSTOMER_NAME: customer?.name || 'Customer',
    ORDER_ID: payment.orderId,
    PAYMENT_ID: payment.paymentId || 'Not provided',
    AMOUNT: payment.amount,
    CURRENCY: payment.currency || 'INR',
    PAYMENT_METHOD: payment.method || 'UPI',
    COMPLETED_AT: payment.completedAt || payment.timestamp || new Date().toISOString(),
    UTR: payment.utr || payment.bankRef || 'Not provided',
    CUSTOMER_EMAIL: customer?.email || 'Not provided',
    CUSTOMER_PHONE: customer?.mobileNumber || customer?.phoneNumber || 'Not provided',
    METADATA: JSON.stringify(metadata, null, 2)
  };
}

export class PaymentNotificationService {
  constructor(options = {}) {
    this.gatewayApiUrl = (options.gatewayApiUrl || process.env.PAYMENT_API_INTERNAL_URL || 'http://127.0.0.1:6100').replace(/\/+$/, '');
    this.emailSender = options.emailSender || null;
    this.whatsappSender = options.whatsappSender || ((to, message) => this.sendWhatsApp(to, message));
    this.logger = options.logger || console;
    this.templates = {
      success: fs.readFileSync(path.join(templateDirectory, 'payment-success.html'), 'utf8'),
      cancelled: fs.readFileSync(path.join(templateDirectory, 'payment-cancelled.html'), 'utf8')
    };
    this.smtpTransport = null;
  }

  async loadCustomer(payment) {
    if (payment.customer) return payment.customer;
    if (!payment.paymentId) {
      this.logger.warn('[PaymentNotifications] Cannot look up customer: paymentId is missing.');
      return null;
    }

    const response = await fetch(
      `${this.gatewayApiUrl}/api/v1/payments/${encodeURIComponent(payment.paymentId)}/cod`,
      { signal: AbortSignal.timeout(10000) }
    );
    if (!response.ok) {
      throw new Error(`Customer lookup failed [HTTP ${response.status}].`);
    }
    const details = await response.json();
    if (details.paymentId !== payment.paymentId || details.orderId !== payment.orderId) {
      throw new Error('Customer lookup returned details for a different payment or order.');
    }
    return details.customer || null;
  }

  async sendEmail({ to, subject, html }) {
    if (this.emailSender) {
      return this.emailSender({ to, subject, html });
    }

    const host = process.env.SMTP_HOST;
    const from = process.env.SMTP_FROM;
    if (!host || !from) {
      throw new Error('Outbound email is not configured. Set SMTP_HOST and SMTP_FROM.');
    }

    if (!this.smtpTransport) {
      const port = Number(process.env.SMTP_PORT || 587);
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASSWORD;
      if ((user && !pass) || (!user && pass)) {
        throw new Error('SMTP_USER and SMTP_PASSWORD must be configured together.');
      }
      this.smtpTransport = nodemailer.createTransport({
        host,
        port,
        secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
        ...(user ? { auth: { user, pass } } : {})
      });
    }

    return this.smtpTransport.sendMail({ from, to, subject, html });
  }

  async sendWhatsApp(to, message) {
    const response = await fetch(`${this.gatewayApiUrl}/api/v1/admin/whatsapp/test-message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, message }),
      signal: AbortSignal.timeout(15000)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success || !result.delivered) {
      throw new Error(result.error || result.message || `WhatsApp delivery failed [HTTP ${response.status}].`);
    }
    return result;
  }

  async notifyPayment(payment, outcome) {
    let customer;
    try {
      customer = await this.loadCustomer(payment);
    } catch (error) {
      this.logger.error(`[PaymentNotifications] Could not load customer for order ${payment.orderId}: ${error.message}`);
      return { customer: 'unavailable', email: 'not_sent', whatsapp: 'not_sent' };
    }

    const details = formatPaymentDetails(payment, customer);
    const html = replaceTemplateTokens(this.templates[outcome], details, true);
    const isSuccess = outcome === 'success';
    const subject = isSuccess
      ? `Payment received · Order ${payment.orderId}`
      : `Payment cancelled · Order ${payment.orderId}`;
    const message = isSuccess
      ? `YOUPI Store payment confirmed\nOrder ID: ${payment.orderId}\nPayment ID: ${details.PAYMENT_ID}\nAmount: ${details.CURRENCY} ${details.AMOUNT}\nMethod: ${details.PAYMENT_METHOD}\nUTR: ${details.UTR}\nCompleted at: ${details.COMPLETED_AT}\nCustomer: ${details.CUSTOMER_NAME}\nEmail: ${details.CUSTOMER_EMAIL}\nPhone: ${details.CUSTOMER_PHONE}\nOrder details: ${details.METADATA}`
      : `YOUPI Store payment cancelled\nOrder ID: ${payment.orderId}\nPayment ID: ${details.PAYMENT_ID}\nAmount: ${details.CURRENCY} ${details.AMOUNT}\nCustomer: ${details.CUSTOMER_NAME}\nEmail: ${details.CUSTOMER_EMAIL}\nPhone: ${details.CUSTOMER_PHONE}\nOrder details: ${details.METADATA}`;
    const result = { email: 'skipped', whatsapp: 'skipped' };

    if (customer?.email && !customer.email.endsWith('@customer.youpi.local')) {
      try {
        await this.sendEmail({
          to: customer.email,
          subject,
          html
        });
        result.email = 'sent';
      } catch (error) {
        result.email = 'failed';
        this.logger.error(`[PaymentNotifications] Email delivery failed for order ${payment.orderId}: ${error.message}`);
      }
    } else {
      this.logger.warn(`[PaymentNotifications] No customer email available for order ${payment.orderId}; email not sent.`);
    }

    const phone = customer?.mobileNumber || customer?.phoneNumber;
    if (phone) {
      try {
        await this.whatsappSender(phone, message);
        result.whatsapp = 'sent';
      } catch (error) {
        result.whatsapp = 'failed';
        this.logger.error(`[PaymentNotifications] WhatsApp delivery failed for order ${payment.orderId}: ${error.message}`);
      }
    } else {
      this.logger.warn(`[PaymentNotifications] No customer phone available for order ${payment.orderId}; WhatsApp not sent.`);
    }

    return result;
  }

  async notifySuccessfulPayment(payment) {
    return this.notifyPayment(payment, 'success');
  }

  async notifyCancelledPayment(payment) {
    return this.notifyPayment(payment, 'cancelled');
  }
}
