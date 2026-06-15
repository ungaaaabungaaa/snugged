import crypto from "node:crypto";

export type CreateRazorpayPaymentInput = {
  amount: number;
  currency: "INR";
  receipt: string;
  notes?: Record<string, string>;
};

export type RazorpayPaymentSession = {
  id: string;
  amount: number;
  currency: "INR";
  status: "stub" | "created";
};

export class RazorpayProvider {
  async createPaymentSession(input: CreateRazorpayPaymentInput): Promise<RazorpayPaymentSession> {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return {
        id: `rzp_stub_${Date.now()}`,
        amount: input.amount,
        currency: input.currency,
        status: "stub"
      };
    }

    // TODO: Instantiate Razorpay SDK and create an order once keys are available.
    return {
      id: `rzp_ready_${Date.now()}`,
      amount: input.amount,
      currency: input.currency,
      status: "created"
    };
  }

  verifySignature(input: {
    orderId: string;
    paymentId: string;
    signature: string;
  }) {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return false;
    }

    const expected = crypto
      .createHmac("sha256", secret)
      .update(`${input.orderId}|${input.paymentId}`)
      .digest("hex");

    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(input.signature));
  }
}
