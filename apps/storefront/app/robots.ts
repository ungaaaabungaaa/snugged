import type { MetadataRoute } from "next";
import { BRAND_CANONICAL_URL } from "@snugged/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout", "/account", "/cart", "/wishlist"]
    },
    sitemap: `${BRAND_CANONICAL_URL}/sitemap.xml`
  };
}
