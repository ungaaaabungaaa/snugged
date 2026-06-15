export type CategoryGroup = {
  title: string;
  slug: string;
  items: Array<{ title: string; slug: string }>;
};

export const categoryGroups: CategoryGroup[] = [
  {
    title: "Clothing",
    slug: "clothing",
    items: [
      { title: "T-Shirts", slug: "t-shirts" },
      { title: "Shirts", slug: "shirts" },
      { title: "Tops", slug: "tops" },
      { title: "Dresses", slug: "dresses" },
      { title: "Hoodies", slug: "hoodies" },
      { title: "Jackets", slug: "jackets" },
      { title: "Pants", slug: "pants" },
      { title: "Jeans", slug: "jeans" },
      { title: "Shorts", slug: "shorts" },
      { title: "Ethnic Wear", slug: "ethnic-wear" },
      { title: "Streetwear", slug: "streetwear" },
      { title: "Vintage", slug: "vintage" },
      { title: "Kids Fashion", slug: "kids-fashion" }
    ]
  },
  {
    title: "Jewellery",
    slug: "jewellery",
    items: [
      { title: "Rings", slug: "rings" },
      { title: "Necklaces", slug: "necklaces" },
      { title: "Earrings", slug: "earrings" },
      { title: "Bracelets", slug: "bracelets" },
      { title: "Anklets", slug: "anklets" }
    ]
  },
  {
    title: "Accessories",
    slug: "accessories",
    items: [
      { title: "Bags", slug: "bags" },
      { title: "Belts", slug: "belts" },
      { title: "Sunglasses", slug: "sunglasses" },
      { title: "Watches", slug: "watches" },
      { title: "Caps", slug: "caps" },
      { title: "Scarves", slug: "scarves" }
    ]
  },
  {
    title: "Shoes",
    slug: "shoes",
    items: [
      { title: "Sneakers", slug: "sneakers" },
      { title: "Casual Shoes", slug: "casual-shoes" },
      { title: "Sandals", slug: "sandals" },
      { title: "Boots", slug: "boots" }
    ]
  }
];

export const collections = [
  { title: "New Drops", slug: "new-drops" },
  { title: "One of One", slug: "one-of-one" },
  { title: "AI Try-On", slug: "ai-try-on" },
  { title: "Under Rs. 499", slug: "under-499" },
  { title: "Premium Finds", slug: "premium-finds" },
  { title: "Vintage Finds", slug: "vintage-finds" }
];

export const flatCategories = categoryGroups.flatMap((group) => [
  { title: group.title, slug: group.slug },
  ...group.items
]);
