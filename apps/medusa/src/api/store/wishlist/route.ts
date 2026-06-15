import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { WISHLIST_MODULE } from "../../../modules/wishlist/index.ts";

type WishlistPayload = {
  customer_id: string;
  items: Array<{
    product_id: string;
    variant_id?: string;
    title: string;
    handle: string;
    thumbnail?: string;
    price?: number;
  }>;
};

export async function POST(req: MedusaRequest<WishlistPayload>, res: MedusaResponse) {
  const service = req.scope.resolve(WISHLIST_MODULE) as {
    createWishlists(input: {
      customer_id: string;
      product_id: string;
      variant_id?: string;
      title: string;
      handle: string;
      thumbnail?: string;
      price?: number;
    }): Promise<unknown>;
  };
  const body = req.validatedBody || req.body;

  const created = [];
  for (const item of body.items || []) {
    created.push(
      await service.createWishlists({
        customer_id: body.customer_id,
        product_id: item.product_id,
        variant_id: item.variant_id,
        title: item.title,
        handle: item.handle,
        thumbnail: item.thumbnail,
        price: item.price
      }),
    );
  }

  res.json({ wishlist: created });
}
