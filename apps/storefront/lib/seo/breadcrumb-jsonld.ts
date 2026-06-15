import { BRAND_CANONICAL_URL, BRAND_NAME } from "@snugged/config";

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: BRAND_NAME,
        item: BRAND_CANONICAL_URL
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${BRAND_CANONICAL_URL}${item.path}`
      }))
    ]
  };
}
