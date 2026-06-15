export type WhatsAppTemplate =
  | "otp"
  | "order_placed"
  | "payment_success"
  | "payment_failed"
  | "order_packed"
  | "order_shipped"
  | "delivery_update"
  | "support_reply";

export type WhatsAppMessageLog = {
  id: string;
  customer_id?: string;
  phone: string;
  order_id?: string;
  template: WhatsAppTemplate;
  status: "queued" | "sent" | "failed" | "stubbed";
  provider_message_id?: string;
  error?: string;
  created_at: string;
};

export type SendMessageInput = {
  phone: string;
  template: WhatsAppTemplate;
  text?: string;
  order_id?: string;
  customer_id?: string;
  variables?: Record<string, string | number>;
};
