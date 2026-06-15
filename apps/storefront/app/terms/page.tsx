import { InfoPage } from "@/components/info-page";

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms and Conditions"
      intro="Placeholder terms for prepaid fashion-only ecommerce."
      items={[
        "Products are fashion-only and sold in INR.",
        "No COD. Razorpay is the planned payment processor.",
        "Inventory is limited, and one-of-one pieces cannot be purchased after they sell out."
      ]}
    />
  );
}
