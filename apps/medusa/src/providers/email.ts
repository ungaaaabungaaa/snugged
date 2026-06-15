export class EmailProvider {
  async sendOrderReceipt(input: { to?: string; orderId: string }) {
    if (!process.env.RESEND_API_KEY || !input.to) {
      return { provider: "stub", sent: false };
    }

    // TODO: Use Resend once the sender domain and key are configured.
    return { provider: "resend", sent: false, orderId: input.orderId };
  }
}
