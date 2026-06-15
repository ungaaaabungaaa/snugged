export const requiredManualSetup = [
  "GitHub remote URL",
  "Cloudflare R2 account and bucket",
  "WhatsApp number and OpenWA session",
  "Razorpay account and keys",
  "Delivery portal/provider details",
  "Resend, Sentry, PostHog, and ad pixel keys",
  "GST/invoice details when ready"
];

export function readEnv(name: string, fallback = "") {
  return process.env[name] || fallback;
}

export function hasEnv(name: string) {
  return Boolean(process.env[name]);
}
