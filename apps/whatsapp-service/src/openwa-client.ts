import type { SendMessageInput, WhatsAppMessageLog } from "./types";

export class OpenWaClient {
  constructor(
    private readonly options = {
      apiUrl: process.env.OPENWA_API_URL || "http://localhost:8080",
      apiKey: process.env.OPENWA_API_KEY || "",
      mode: process.env.OPENWA_MODE || "stub"
    },
  ) {}

  async send(input: SendMessageInput): Promise<WhatsAppMessageLog> {
    const logBase = {
      id: `wam_${Date.now()}`,
      customer_id: input.customer_id,
      phone: input.phone,
      order_id: input.order_id,
      template: input.template,
      created_at: new Date().toISOString()
    };

    if (this.options.mode === "stub" || !this.options.apiKey) {
      return {
        ...logBase,
        status: "stubbed",
        provider_message_id: `stub_${Date.now()}`
      };
    }

    const response = await fetch(`${this.options.apiUrl}/sendText`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "api_key": this.options.apiKey
      },
      body: JSON.stringify({
        to: input.phone,
        content: input.text || this.renderTemplate(input)
      })
    });

    if (!response.ok) {
      return {
        ...logBase,
        status: "failed",
        error: `OpenWA responded with ${response.status}`
      };
    }

    const data = (await response.json()) as { id?: string };
    return {
      ...logBase,
      status: "sent",
      provider_message_id: data.id
    };
  }

  private renderTemplate(input: SendMessageInput) {
    const orderId = input.order_id || input.variables?.order_id || "your order";
    const templates: Record<string, string> = {
      otp: `Your Snugged.Shop OTP is ${input.variables?.code || "000000"}.`,
      order_placed: `Snugged.Shop order ${orderId} has been placed.`,
      payment_success: `Payment received for Snugged.Shop order ${orderId}.`,
      payment_failed: `Payment failed for Snugged.Shop order ${orderId}. Please retry checkout.`,
      order_packed: `Snugged.Shop order ${orderId} is packed.`,
      order_shipped: `Snugged.Shop order ${orderId} has shipped.`,
      delivery_update: `Delivery update for Snugged.Shop order ${orderId}.`,
      support_reply: input.text || "Snugged.Shop support has replied."
    };

    return templates[input.template] || input.text || "Snugged.Shop update";
  }
}
