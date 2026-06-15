import { InfoPage } from "@/components/info-page";

export default function FaqPage() {
  return (
    <InfoPage
      title="FAQ"
      intro="Frequently asked questions for the MVP store."
      items={[
        "Do I need an account? No, account creation happens only during checkout OTP verification.",
        "Do you support COD? No, online payment only.",
        "Are thrift pieces returnable? Standard returns are not available, but genuine damage claims can be reviewed.",
        "How does AI try-on work? It is a placeholder in v1 and will connect to a provider later."
      ]}
    />
  );
}
