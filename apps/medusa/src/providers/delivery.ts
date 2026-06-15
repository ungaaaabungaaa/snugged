import type { DeliveryProvider, OrderSummary, ShipmentResult, TrackingResult } from "@snugged/types";

export class ManualDeliveryProvider implements DeliveryProvider {
  async createShipment(order: OrderSummary): Promise<ShipmentResult> {
    return {
      provider: process.env.DELIVERY_PROVIDER_NAME || "manual",
      tracking_id: `manual_${order.id}`,
      status: "manual_required"
    };
  }

  async getTracking(trackingId: string): Promise<TrackingResult> {
    return {
      tracking_id: trackingId,
      status: "pending",
      updated_at: new Date().toISOString(),
      checkpoints: [
        {
          label: "Manual shipping status pending",
          at: new Date().toISOString()
        }
      ]
    };
  }

  async cancelShipment() {
    return;
  }
}
