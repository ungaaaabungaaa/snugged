import type { StoreProduct } from "@snugged/types";

export function canAddVariantToCart(product: StoreProduct, variantId: string, requestedQuantity: number) {
  const variant = product.variants.find((item) => item.id === variantId);
  if (!variant) {
    return false;
  }

  if (product.metadata.one_of_one && requestedQuantity > 1) {
    return false;
  }

  return variant.inventory_quantity >= requestedQuantity;
}
