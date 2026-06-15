import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { WhatsAppOtpProvider } from "../../../../providers/otp.ts";

export async function POST(req: MedusaRequest<{ phone: string }>, res: MedusaResponse) {
  const provider = new WhatsAppOtpProvider();
  const result = await provider.send({ phone: req.body.phone });
  res.json(result);
}
