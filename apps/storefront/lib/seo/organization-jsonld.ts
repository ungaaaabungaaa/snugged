import { BRAND_CANONICAL_URL, BRAND_DESCRIPTION, BRAND_NAME } from "@snugged/config";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: BRAND_CANONICAL_URL,
    description: BRAND_DESCRIPTION,
    sameAs: [
      "https://instagram.com/snuggedshop",
      "https://facebook.com/snuggedshop",
      "https://pinterest.com/snuggedshop"
    ]
  };
}
