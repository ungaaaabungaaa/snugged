import { flatCategories, getLowestPrice, sampleProducts } from "@snugged/config";
import type { StoreProduct } from "@snugged/types";

export type ProductFilters = {
  category?: string;
  query?: string;
  condition?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: "newest" | "price-asc" | "price-desc";
};

export function listProducts(filters: ProductFilters = {}) {
  let products = [...sampleProducts];

  if (filters.category) {
    const category = filters.category.toLowerCase();
    products = products.filter((product) => {
      if (category === "one-of-one") {
        return Boolean(product.metadata.one_of_one);
      }
      if (category === "ai-try-on") {
        return Boolean(product.metadata.ai_try_on_enabled);
      }
      if (category === "under-499") {
        return getLowestPrice(product) <= 499;
      }
      if (category === "new-drops" || category === "premium-finds" || category === "vintage-finds") {
        return product.collection === category;
      }
      const group = flatCategories.find((item) => item.slug === category);
      return product.category === category || product.category === group?.slug;
    });
  }

  if (filters.query) {
    const query = filters.query.toLowerCase();
    products = products.filter((product) =>
      [product.title, product.subtitle, product.description, product.category]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query)),
    );
  }

  if (filters.condition) {
    products = products.filter((product) => product.metadata.condition === filters.condition);
  }

  if (filters.size) {
    products = products.filter((product) =>
      product.variants.some((variant) => variant.size?.toLowerCase() === filters.size?.toLowerCase()),
    );
  }

  if (filters.minPrice !== undefined) {
    products = products.filter((product) => getLowestPrice(product) >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    products = products.filter((product) => getLowestPrice(product) <= filters.maxPrice!);
  }

  if (filters.sort === "price-asc") {
    products.sort((a, b) => getLowestPrice(a) - getLowestPrice(b));
  } else if (filters.sort === "price-desc") {
    products.sort((a, b) => getLowestPrice(b) - getLowestPrice(a));
  } else {
    products.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
  }

  return products;
}

export function getProduct(handle: string): StoreProduct | undefined {
  return sampleProducts.find((product) => product.handle === handle);
}

export function getVariant(product: StoreProduct, variantId?: string) {
  return product.variants.find((variant) => variant.id === variantId) || product.variants[0];
}

export function productIsSoldOut(product: StoreProduct) {
  return product.variants.every((variant) => variant.inventory_quantity <= 0);
}
