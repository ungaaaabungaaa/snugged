import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { RazorpayProvider } from "../../../../../providers/razorpay.ts";

export async function POST(
  req: MedusaRequest<{ amount: number; receipt: string; notes?: Record<string, string> }>,
  res: MedusaResponse,
) {
  const provider = new RazorpayProvider();
  const session = await provider.createPaymentSession({
    amount: req.body.amount,
    currency: "INR",
    receipt: req.body.receipt,
    notes: req.body.notes
  });

  res.json({ payment_session: session });
}
