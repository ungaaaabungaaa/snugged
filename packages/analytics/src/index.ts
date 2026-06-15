export type AnalyticsEvent =
  | "page_view"
  | "product_viewed"
  | "category_viewed"
  | "search_performed"
  | "filter_used"
  | "wishlist_added"
  | "wishlist_removed"
  | "cart_added"
  | "cart_removed"
  | "checkout_started"
  | "otp_requested"
  | "otp_verified"
  | "payment_started"
  | "payment_success"
  | "payment_failed"
  | "order_placed"
  | "tryon_started"
  | "tryon_completed";

export type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

type BrowserWindow = Window &
  typeof globalThis & {
    posthog?: { capture: (event: string, props?: AnalyticsProperties) => void };
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, props?: AnalyticsProperties) => void };
  };

export function trackEvent(event: AnalyticsEvent, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const win = window as BrowserWindow;
  win.posthog?.capture(event, properties);
  win.gtag?.("event", event, properties);
  win.fbq?.("trackCustom", event, properties);
  win.ttq?.track(event, properties);
}

export function identifyCustomer(customerId: string, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const win = window as BrowserWindow;
  win.posthog?.capture("$identify", { distinct_id: customerId, ...properties });
}
