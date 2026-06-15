import { InfoPage } from "@/components/info-page";

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact"
      intro="Support is WhatsApp-first for MVP, with Resend-ready email support planned for receipts and follow-ups."
      items={[
        "WhatsApp support link will be added after the business number is connected.",
        "Use this page for order questions, damaged item claims, shipment updates, and sizing help."
      ]}
    />
  );
}
