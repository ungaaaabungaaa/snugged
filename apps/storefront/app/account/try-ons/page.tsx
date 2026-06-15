import { InfoPage } from "@/components/info-page";

export default function TryOnsPage() {
  return (
    <InfoPage
      title="AI try-on history"
      intro="Placeholder account area for generated try-on jobs and saved result image URLs."
      items={[
        "Queued, processing, completed, and failed job states are typed in shared packages.",
        "Results will attach to the customer after checkout auth."
      ]}
    />
  );
}
