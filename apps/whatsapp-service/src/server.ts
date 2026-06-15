import * as Sentry from "@sentry/node";
import Fastify from "fastify";
import { z } from "zod";
import { OpenWaClient } from "./openwa-client";

if (process.env.SENTRY_DSN) {
  Sentry.init({ dsn: process.env.SENTRY_DSN, tracesSampleRate: 0.1 });
}

const app = Fastify({
  logger: true
});

const internalApiKey = process.env.INTERNAL_API_KEY || "dev-internal-key";
const client = new OpenWaClient();

const sendSchema = z.object({
  phone: z.string().min(5),
  template: z.enum([
    "otp",
    "order_placed",
    "payment_success",
    "payment_failed",
    "order_packed",
    "order_shipped",
    "delivery_update",
    "support_reply"
  ]),
  text: z.string().optional(),
  order_id: z.string().optional(),
  customer_id: z.string().optional(),
  variables: z.record(z.union([z.string(), z.number()])).optional()
});

app.get("/health", async () => ({
  ok: true,
  service: "snugged-whatsapp-service",
  mode: process.env.OPENWA_MODE || "stub"
}));

app.addHook("preHandler", async (request, reply) => {
  if (!request.url.startsWith("/internal/")) {
    return;
  }

  if (request.headers["x-internal-api-key"] !== internalApiKey) {
    reply.code(401);
    throw new Error("Missing or invalid internal API key");
  }
});

app.post("/internal/whatsapp/send", async (request) => {
  const payload = sendSchema.parse(request.body);
  const log = await client.send(payload);
  return { message: log };
});

app.post("/internal/whatsapp/order-placed", async (request) => {
  const payload = sendSchema
    .pick({ phone: true, customer_id: true, order_id: true })
    .extend({ phone: z.string().default(process.env.WHATSAPP_BUSINESS_NUMBER || "") })
    .parse(request.body);

  return {
    message: await client.send({
      phone: payload.phone,
      customer_id: payload.customer_id,
      order_id: payload.order_id,
      template: "order_placed"
    })
  };
});

app.post("/internal/whatsapp/order-shipped", async (request) => {
  const payload = sendSchema.pick({ phone: true, customer_id: true, order_id: true }).parse(request.body);
  return {
    message: await client.send({ ...payload, template: "order_shipped" })
  };
});

app.post("/internal/whatsapp/payment-success", async (request) => {
  const payload = sendSchema.pick({ phone: true, customer_id: true, order_id: true }).parse(request.body);
  return {
    message: await client.send({ ...payload, template: "payment_success" })
  };
});

app.post("/internal/whatsapp/payment-failed", async (request) => {
  const payload = sendSchema.pick({ phone: true, customer_id: true, order_id: true }).parse(request.body);
  return {
    message: await client.send({ ...payload, template: "payment_failed" })
  };
});

app.post("/internal/whatsapp/support-reply", async (request) => {
  const payload = sendSchema.pick({ phone: true, customer_id: true, text: true }).parse(request.body);
  return {
    message: await client.send({ ...payload, template: "support_reply" })
  };
});

const port = Number(process.env.PORT || 3100);

app.listen({ port, host: "0.0.0.0" }).catch((error) => {
  app.log.error(error);
  Sentry.captureException(error);
  process.exit(1);
});
