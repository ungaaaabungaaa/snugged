import { InfoPage } from "@/components/info-page";

export default function AboutPage() {
  return (
    <InfoPage
      title="About Snugged.Shop"
      intro="A fashion-only ecommerce store for new, pre-owned, thrift, one-of-one, and AI try-on enabled pieces."
      items={[
        "We focus on clothing, jewellery, bags, shoes, watches, belts, sunglasses, and fashion accessories.",
        "No vegetables, hydroponics, 3D-printed toys, pottery, food products, or multi-vendor marketplace flows.",
        "Every one-of-one thrift piece should include honest condition, flaws, measurements, and inventory quantity."
      ]}
    />
  );
}
