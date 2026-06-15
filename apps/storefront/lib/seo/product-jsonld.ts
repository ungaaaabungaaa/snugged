import { BRAND_CANONICAL_URL, BRAND_NAME } from "@snugged/config";
import type { StoreProduct } from "@snugged/types";
import { getLowestPrice } from "@snugged/config";

export function productJsonLd(product: StoreProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: product.metadata.brand || BRAND_NAME
    },
    sku: product.variants[0]?.sku,
    offers: {
      "@type": "Offer",
      url: `${BRAND_CANONICAL_URL}/product/${product.handle}`,
      priceCurrency: "INR",
      price: getLowestPrice(product),
      availability: product.variants.some((variant) => variant.inventory_quantity > 0)
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock"
    }
  };
}
