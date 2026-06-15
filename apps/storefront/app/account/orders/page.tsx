import { InfoPage } from "@/components/info-page";

export default function OrdersPage() {
  return (
    <InfoPage
      title="Orders"
      intro="Order history placeholder for authenticated checkout customers."
      items={[
        "Medusa orders will appear here after phone OTP checkout.",
        "Shipping status supports manual updates until the delivery API is connected."
      ]}
    />
  );
}
