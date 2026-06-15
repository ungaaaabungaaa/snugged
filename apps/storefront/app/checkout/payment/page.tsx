import { InfoPage } from "@/components/info-page";

export default function PaymentPage() {
  return (
    <InfoPage
      title="Payment"
      intro="Razorpay checkout shell. Real payment collection starts after keys and webhook secret are added."
      items={[
        "Create payment session on the backend.",
        "Open Razorpay checkout with the public key.",
        "Verify payment signature on the backend.",
        "Complete Medusa order and send WhatsApp confirmation."
      ]}
    />
  );
}
