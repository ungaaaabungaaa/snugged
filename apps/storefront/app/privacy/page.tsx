import { InfoPage } from "@/components/info-page";

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro="Placeholder privacy policy for launch preparation."
      items={[
        "We collect phone, name, address, optional email, order, wishlist, cart, analytics, and support information.",
        "Analytics and ad pixels are no-op when env keys are missing.",
        "Customer data is used for checkout, delivery, support, fraud prevention, and store analytics."
      ]}
    />
  );
}
