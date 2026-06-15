import { InfoPage } from "@/components/info-page";

export default function ShippingPage() {
  return (
    <InfoPage
      title="Shipping Policy"
      intro="Shipping is prepaid and India-only for v1."
      items={[
        "No COD. Online payment only.",
        "Manual shipping status updates are supported until the delivery provider API is connected.",
        "Tracking details will be sent through WhatsApp and visible in order history."
      ]}
    />
  );
}
