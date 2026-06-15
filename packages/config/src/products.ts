import type { StoreProduct } from "@snugged/types";

const now = "2026-06-16T00:00:00.000Z";

export const sampleProducts: StoreProduct[] = [
  {
    id: "prod_vintage_black_shirt",
    title: "Vintage Oversized Black Shirt",
    handle: "vintage-oversized-black-shirt",
    subtitle: "One-of-one thrift shirt",
    description:
      "A relaxed black oversized shirt with a soft washed feel. Minor signs of previous wear make this a one-of-one thrift find.",
    category: "shirts",
    collection: "one-of-one",
    thumbnail:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 5,
    review_count: 12,
    metadata: {
      product_type: "thrift_clothing",
      condition: "vintage",
      gender: "unisex",
      size_label: "L",
      brand: "Vintage",
      color: ["black"],
      fabric: "cotton blend",
      measurements: { chest_cm: 112, length_cm: 74, shoulder_cm: 50 },
      flaws: ["light fading near collar"],
      care_instructions: "Cold wash separately and air dry.",
      one_of_one: true,
      authenticity_note: "Single sourced thrift piece."
    },
    variants: [
      {
        id: "var_vintage_black_shirt_l",
        title: "L / Black",
        sku: "SNUG-THR-BLK-SHIRT-L",
        size: "L",
        color: "Black",
        price: { amount: 699, currency_code: "inr" },
        inventory_quantity: 1
      }
    ],
    created_at: now
  },
  {
    id: "prod_blue_denim_jacket",
    title: "Blue Denim Jacket",
    handle: "blue-denim-jacket",
    subtitle: "Pre-owned denim layer",
    description:
      "A sturdy blue denim jacket for easy layering. Structured enough for daily wear, soft enough for all-day comfort.",
    category: "jackets",
    collection: "vintage-finds",
    thumbnail:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    review_count: 18,
    metadata: {
      product_type: "thrift_clothing",
      condition: "good",
      gender: "unisex",
      size_label: "M",
      brand: "Denim Co.",
      color: ["blue"],
      fabric: "denim",
      measurements: { chest_cm: 106, length_cm: 64, shoulder_cm: 47 },
      one_of_one: true
    },
    variants: [
      {
        id: "var_blue_denim_jacket_m",
        title: "M / Blue",
        sku: "SNUG-THR-DENIM-M",
        size: "M",
        color: "Blue",
        price: { amount: 1199, currency_code: "inr" },
        inventory_quantity: 1
      }
    ],
    created_at: now
  },
  {
    id: "prod_white_crop_top",
    title: "White Ribbed Crop Top",
    handle: "white-ribbed-crop-top",
    subtitle: "New everyday top",
    description:
      "A clean ribbed crop top with a fitted shape. Easy to style with denim, skirts, or layered jackets.",
    category: "tops",
    collection: "new-drops",
    thumbnail:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    review_count: 22,
    metadata: {
      product_type: "new_clothing",
      condition: "new",
      gender: "women",
      size_label: "S/M/L",
      color: ["white"],
      fabric: "ribbed cotton",
      ai_try_on_enabled: true
    },
    variants: ["S", "M", "L"].map((size) => ({
      id: `var_white_crop_top_${size.toLowerCase()}`,
      title: `${size} / White`,
      sku: `SNUG-NEW-CROP-${size}`,
      size,
      color: "White",
      price: { amount: 399, currency_code: "inr" },
      inventory_quantity: 8
    })),
    created_at: now
  },
  {
    id: "prod_silver_ring",
    title: "Minimal Silver Ring",
    handle: "minimal-silver-ring",
    subtitle: "Everyday jewellery",
    description: "A clean silver-tone ring designed for daily stacking or solo wear.",
    category: "rings",
    collection: "under-499",
    thumbnail:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 5,
    review_count: 9,
    metadata: {
      product_type: "jewellery",
      condition: "new",
      gender: "unisex",
      material: "silver-tone alloy",
      color: ["silver"]
    },
    variants: ["6", "7", "8"].map((size) => ({
      id: `var_silver_ring_${size}`,
      title: `Size ${size}`,
      sku: `SNUG-JWL-RING-${size}`,
      size,
      color: "Silver",
      price: { amount: 299, currency_code: "inr" },
      inventory_quantity: 15
    })),
    created_at: now
  },
  {
    id: "prod_chain_necklace",
    title: "Minimal Chain Necklace",
    handle: "minimal-chain-necklace",
    subtitle: "Layering necklace",
    description: "A light chain necklace that works with casual fits and dressed-up looks.",
    category: "necklaces",
    collection: "under-499",
    thumbnail:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    review_count: 16,
    metadata: {
      product_type: "jewellery",
      condition: "new",
      gender: "unisex",
      material: "stainless steel",
      color: ["silver"]
    },
    variants: [
      {
        id: "var_chain_necklace_standard",
        title: "Standard",
        sku: "SNUG-JWL-CHAIN-STD",
        price: { amount: 349, currency_code: "inr" },
        inventory_quantity: 20
      }
    ],
    created_at: now
  },
  {
    id: "prod_black_sling_bag",
    title: "Black Sling Bag",
    handle: "black-sling-bag",
    subtitle: "Compact everyday bag",
    description:
      "A compact black sling bag with enough room for phone, wallet, keys, and small daily carry.",
    category: "bags",
    collection: "premium-finds",
    thumbnail:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    review_count: 11,
    metadata: {
      product_type: "bag",
      condition: "new",
      gender: "unisex",
      material: "vegan leather",
      color: ["black"]
    },
    variants: [
      {
        id: "var_black_sling_bag",
        title: "Black",
        sku: "SNUG-ACC-BAG-BLK",
        color: "Black",
        price: { amount: 899, currency_code: "inr" },
        inventory_quantity: 6
      }
    ],
    created_at: now
  },
  {
    id: "prod_brown_leather_belt",
    title: "Brown Leather Belt",
    handle: "brown-leather-belt",
    subtitle: "Classic accessory",
    description: "A brown belt with a simple buckle and clean finish for daily styling.",
    category: "belts",
    collection: "new-drops",
    thumbnail:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    review_count: 8,
    metadata: {
      product_type: "belt",
      condition: "new",
      gender: "unisex",
      material: "leather",
      color: ["brown"]
    },
    variants: [
      {
        id: "var_brown_belt_m",
        title: "M / Brown",
        sku: "SNUG-ACC-BELT-M",
        size: "M",
        color: "Brown",
        price: { amount: 499, currency_code: "inr" },
        inventory_quantity: 10
      }
    ],
    created_at: now
  },
  {
    id: "prod_vintage_sunglasses",
    title: "Vintage Sunglasses",
    handle: "vintage-sunglasses",
    subtitle: "One-of-one eyewear",
    description:
      "A vintage-inspired sunglass frame with dark lenses. Minor storage marks may be visible.",
    category: "sunglasses",
    collection: "vintage-finds",
    thumbnail:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 5,
    review_count: 5,
    metadata: {
      product_type: "sunglasses",
      condition: "like_new",
      gender: "unisex",
      color: ["black"],
      one_of_one: true
    },
    variants: [
      {
        id: "var_vintage_sunglasses",
        title: "Black",
        sku: "SNUG-ACC-SUN-BLK",
        color: "Black",
        price: { amount: 599, currency_code: "inr" },
        inventory_quantity: 1
      }
    ],
    created_at: now
  },
  {
    id: "prod_white_sneakers",
    title: "White Sneakers",
    handle: "white-sneakers",
    subtitle: "Clean casual shoes",
    description: "Minimal white sneakers for everyday fits.",
    category: "sneakers",
    collection: "new-drops",
    thumbnail:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    review_count: 19,
    metadata: {
      product_type: "shoe",
      condition: "new",
      gender: "unisex",
      color: ["white"],
      material: "synthetic leather"
    },
    variants: ["5", "6", "7", "8", "9"].map((size) => ({
      id: `var_white_sneakers_${size}`,
      title: `UK ${size} / White`,
      sku: `SNUG-SHOE-WHT-${size}`,
      size: `UK ${size}`,
      color: "White",
      price: { amount: 1499, currency_code: "inr" },
      inventory_quantity: 5
    })),
    created_at: now
  },
  {
    id: "prod_tryon_hoodie",
    title: "AI Try-On Oversized Hoodie",
    handle: "ai-try-on-oversized-hoodie",
    subtitle: "Try-on enabled hoodie",
    description:
      "An oversized hoodie marked for the AI try-on placeholder flow. Upload or select an avatar when the provider is connected.",
    category: "hoodies",
    collection: "ai-try-on",
    thumbnail:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 5,
    review_count: 7,
    metadata: {
      product_type: "new_clothing",
      condition: "new",
      gender: "unisex",
      size_label: "S/M/L/XL",
      color: ["charcoal", "pink"],
      fabric: "cotton fleece",
      ai_try_on_enabled: true
    },
    variants: ["S", "M", "L", "XL"].map((size) => ({
      id: `var_tryon_hoodie_${size.toLowerCase()}`,
      title: `${size} / Charcoal`,
      sku: `SNUG-TRY-HOOD-${size}`,
      size,
      color: "Charcoal",
      price: { amount: 1299, currency_code: "inr" },
      inventory_quantity: 7
    })),
    created_at: now
  }
];

export function getProductByHandle(handle: string) {
  return sampleProducts.find((product) => product.handle === handle);
}

export function getProductsByCategory(category: string) {
  return sampleProducts.filter((product) => product.category === category);
}

export function isSoldOut(product: StoreProduct) {
  return product.variants.every((variant) => variant.inventory_quantity <= 0);
}

export function getLowestPrice(product: StoreProduct) {
  return Math.min(...product.variants.map((variant) => variant.price.amount));
}
