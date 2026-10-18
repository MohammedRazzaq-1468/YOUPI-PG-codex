# Configuration & Secret Management Guide

## 1. Environment Parameters Reference

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `development` | Runtime environment (`development` or `production`) |
| `CONTROL_CENTER_PORT` | `8090` | Host port for the Local Process Supervisor |
| `PAYMENT_API_PORT` | `6100` | Host port for the central Payment Core REST API |
| `CHECKOUT_PORTAL_PORT` | `7000` | Host port for the customer-facing Checkout page |
| `MERCHANT_ADMIN_PORT` | `6001` | Host port for the Merchant Admin Dashboard |
| `HELP_PORTAL_PORT` | `3000` | Host port for the Customer Payment Help Portal |
| `GMAIL_OBSERVER_PORT` | `6003` | Host port for the Gmail Polling Service & OAuth Callback |
| `SMS_OBSERVER_PORT` | `6002` | Host port for the Google Messages / SMS Web Automator |
| `DATABASE_URL` | `postgresql://...` | PostgreSQL connection URL |
| `USE_SQLITE_FALLBACK` | `true` | When true, uses embedded SQLite if PostgreSQL is unreachable |
| `SQLITE_DB_PATH` | `./data/youpi_pg.sqlite`| Path to local SQLite database file |
| `ENCRYPTION_MASTER_KEY` | `64-hex chars` | 256-bit key for encrypting OAuth credentials and device keys |
| `JWT_SECRET` | `32+ chars` | Secret key for customer and admin session tokens |
| `PAYMENT_ACTIVE_WINDOW_MS` | `300000` | Duration of active payment slot (5 minutes = 300,000ms) |
| `PAYMENT_PROCESSING_WINDOW_MS` | `30000` | Duration of verification slot (30 seconds = 30,000ms) |
| `LATE_OBSERVATION_WINDOW_MS` | `1800000` | Safety window for matching late observations (30 minutes) |
| `ANDROID_ENROLLMENT_SECRET` | `32+ chars` | Ephemeral secret token used to authorize device QR pairing |
| `ANDROID_HEARTBEAT_TIMEOUT_MS` | `180000` | Inactivity window before Android device is marked DISCONNECTED |
| `SMTP_HOST` | unset | SMTP server used by the Coin Wallet Store for successful-payment receipts |
| `SMTP_PORT` | `587` | SMTP server port (`465` normally uses implicit TLS) |
| `SMTP_SECURE` | inferred from port | Set to `true` for implicit TLS or `false` for STARTTLS |
| `SMTP_USER` | unset | Optional SMTP username; configure together with `SMTP_PASSWORD` |
| `SMTP_PASSWORD` | unset | Optional SMTP password; configure together with `SMTP_USER` |
| `SMTP_FROM` | unset | Sender address shown on customer payment-receipt emails |

---

## 2. Successful-Payment Customer Notifications

After the Coin Wallet Store verifies a signed `SUCCESS` webhook, it uses the Payment API's existing WhatsApp Berry sender to message the payment customer's registered phone number. It sends a receipt email to the registered customer email when one is available. Customer contact details are loaded from the payment session, not accepted from the browser or webhook body.

Configure `SMTP_HOST` and `SMTP_FROM` to enable receipt email. Add `SMTP_USER` and `SMTP_PASSWORD` together when the relay requires authentication. WhatsApp delivery requires the existing WhatsApp Berry session to be connected in Merchant Admin. Missing customer contact details or unavailable delivery services are logged; they do not undo a payment or wallet credit.

Email templates are HTML-only: `apps/coin-wallet-store/src/email-templates/payment-success.html` for verified payments and `apps/coin-wallet-store/src/email-templates/payment-cancelled.html` for verified cancellations. WhatsApp messages are composed by the notification service; no `.txt` email templates are used.

---

## 3. Cryptographic Secret Generation

Generate strong 256-bit encryption and HMAC keys using Node.js native crypto:

```bash
# Generate 256-bit Master Key (64 hex characters)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Never commit production `.env` files to source code repositories.
