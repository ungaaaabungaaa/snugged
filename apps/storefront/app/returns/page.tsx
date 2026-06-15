import { InfoPage } from "@/components/info-page";

export default function ReturnsPage() {
  return (
    <InfoPage
      title="Returns and Swaps"
      intro="No standard returns for MVP, especially for one-of-one thrift pieces."
      items={[
        "Genuine damaged item claims can receive a swap or replacement where possible.",
        "One-of-one thrift items may have minor signs of use.",
        "Customers must check measurements before ordering."
      ]}
    />
  );
}
