import type { TryOnJob } from "@snugged/types";

export type CreateTryOnJobInput = {
  product_id: string;
  customer_id?: string;
  source_image_url?: string;
};

export class TryOnProvider {
  async createJob(input: CreateTryOnJobInput): Promise<TryOnJob> {
    return {
      id: `tryon_stub_${Date.now()}`,
      product_id: input.product_id,
      customer_id: input.customer_id,
      source_image_url: input.source_image_url,
      status: "queued",
      created_at: new Date().toISOString()
    };
  }
}
