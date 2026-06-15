import type { MetadataRoute } from "next";
import { BRAND_CANONICAL_URL, collections, flatCategories, sampleProducts } from "@snugged/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/shipping",
    "/returns",
    "/privacy",
    "/terms",
    "/faq",
    "/ai-try-on",
    "/thrift-clothes-india",
    "/thrift-clothes-bengaluru",
    "/ai-try-on-clothes",
    "/one-of-one-fashion",
    "/affordable-fashion-india"
  ];

  return [
    ...staticPaths.map((path) => ({ url: `${BRAND_CANONICAL_URL}${path}` })),
    ...flatCategories.map((category) => ({
      url: `${BRAND_CANONICAL_URL}/shop/${category.slug}`
    })),
    ...collections.map((collection) => ({
      url: `${BRAND_CANONICAL_URL}/shop/${collection.slug}`
    })),
    ...sampleProducts.map((product) => ({
      url: `${BRAND_CANONICAL_URL}/product/${product.handle}`
    }))
  ];
}
