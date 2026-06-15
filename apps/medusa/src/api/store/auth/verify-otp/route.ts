import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { WhatsAppOtpProvider } from "../../../../providers/otp.ts";

export async function POST(req: MedusaRequest<{ phone: string; code: string }>, res: MedusaResponse) {
  const provider = new WhatsAppOtpProvider();
  const result = await provider.verify({ phone: req.body.phone, code: req.body.code });
  res.json({
    ...result,
    customer_id: result.verified ? `cus_${req.body.phone.replace(/\D/g, "").slice(-10)}` : null
  });
}
