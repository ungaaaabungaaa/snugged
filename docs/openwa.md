# OpenWA

OpenWA is used for MVP WhatsApp communication and kept isolated in `apps/whatsapp-service`.

Internal endpoints:

- `GET /health`
- `POST /internal/whatsapp/send`
- `POST /internal/whatsapp/order-placed`
- `POST /internal/whatsapp/order-shipped`
- `POST /internal/whatsapp/payment-success`
- `POST /internal/whatsapp/payment-failed`
- `POST /internal/whatsapp/support-reply`

All `/internal/*` endpoints require:

```txt
x-internal-api-key
```

Message templates:

- `otp`
- `order_placed`
- `payment_success`
- `payment_failed`
- `order_packed`
- `order_shipped`
- `delivery_update`
- `support_reply`

Message logs are represented by the `WhatsAppMessageLog` type and should later be persisted with:

```txt
whatsapp_message_logs
  id
  customer_id
  phone
  order_id
  template
  status
  provider_message_id
  error
  created_at
```

Keep `OPENWA_MODE=stub` until the SIM, WhatsApp session, and QR login are ready.
