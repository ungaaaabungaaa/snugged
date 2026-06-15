import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { ManualDeliveryProvider } from "../../../../providers/delivery.ts";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const trackingId = String(req.query.tracking_id || "");
  const provider = new ManualDeliveryProvider();
  const tracking = await provider.getTracking(trackingId);
  res.json({ tracking });
}
