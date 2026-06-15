export type FashionProductType =
  | "thrift_clothing"
  | "new_clothing"
  | "jewellery"
  | "bag"
  | "shoe"
  | "watch"
  | "belt"
  | "sunglasses"
  | "fashion_accessory";

export type FashionCondition = "new" | "like_new" | "good" | "fair" | "vintage";
export type FashionGender = "men" | "women" | "unisex" | "kids";

export type FashionMeasurements = {
  chest_cm?: number;
  length_cm?: number;
  shoulder_cm?: number;
  waist_cm?: number;
  inseam_cm?: number;
  foot_length_cm?: number;
};

export type FashionProductMetadata = {
  product_type: FashionProductType;
  condition?: FashionCondition;
  gender?: FashionGender;
  size_label?: string;
  brand?: string;
  color?: string[];
  fabric?: string;
  material?: string;
  measurements?: FashionMeasurements;
  flaws?: string[];
  care_instructions?: string;
  ai_try_on_enabled?: boolean;
  one_of_one?: boolean;
  authenticity_note?: string;
};

export type Money = {
  amount: number;
  currency_code: "inr";
};

export type ProductVariant = {
  id: string;
  title: string;
  sku: string;
  size?: string;
  color?: string;
  price: Money;
  inventory_quantity: number;
};

export type StoreProduct = {
  id: string;
  title: string;
  handle: string;
  subtitle?: string;
  description: string;
  category: string;
  collection?: string;
  thumbnail: string;
  images: string[];
  rating?: number;
  review_count?: number;
  metadata: FashionProductMetadata;
  variants: ProductVariant[];
  created_at: string;
};

export type LocalCartItem = {
  product_id: string;
  variant_id: string;
  quantity: number;
  title: string;
  handle: string;
  thumbnail?: string;
  price: number;
  currency_code: "inr";
  inventory_quantity?: number;
  added_at: string;
};

export type LocalWishlistItem = {
  product_id: string;
  variant_id?: string;
  title: string;
  handle: string;
  thumbnail?: string;
  price?: number;
  added_at: string;
};

export type CheckoutAddress = {
  full_name: string;
  phone: string;
  email?: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country_code: "in";
};

export type DeliveryProvider = {
  createShipment(order: OrderSummary): Promise<ShipmentResult>;
  getTracking(trackingId: string): Promise<TrackingResult>;
  cancelShipment(trackingId: string): Promise<void>;
};

export type OrderSummary = {
  id: string;
  display_id?: string;
  customer_id?: string;
  phone: string;
  total: number;
  currency_code: "inr";
  items: LocalCartItem[];
  shipping_address: CheckoutAddress;
};

export type ShipmentResult = {
  provider: string;
  tracking_id: string;
  tracking_url?: string;
  label_url?: string;
  status: "created" | "queued" | "manual_required";
};

export type TrackingResult = {
  tracking_id: string;
  status: "pending" | "packed" | "shipped" | "out_for_delivery" | "delivered" | "failed";
  updated_at: string;
  checkpoints: Array<{
    label: string;
    location?: string;
    at: string;
  }>;
};

export type TryOnJob = {
  id: string;
  product_id: string;
  customer_id?: string;
  status: "queued" | "processing" | "completed" | "failed";
  source_image_url?: string;
  result_image_url?: string;
  created_at: string;
};
