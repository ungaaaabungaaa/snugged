export type SendOtpInput = {
  phone: string;
};

export type VerifyOtpInput = {
  phone: string;
  code: string;
};

export type OtpProvider = {
  send(input: SendOtpInput): Promise<{ expiresInSeconds: number; provider: string }>;
  verify(input: VerifyOtpInput): Promise<{ verified: boolean; provider: string }>;
};

export class WhatsAppOtpProvider implements OtpProvider {
  constructor(
    private readonly options = {
      serviceUrl: process.env.WHATSAPP_SERVICE_URL || "http://localhost:3100",
      internalApiKey: process.env.INTERNAL_API_KEY || "dev-internal-key",
      mode: process.env.OTP_MODE || "stub"
    },
  ) {}

  async send(input: SendOtpInput) {
    if (this.options.mode === "stub") {
      return { expiresInSeconds: Number(process.env.OTP_TTL_SECONDS || 300), provider: "stub" };
    }

    await fetch(`${this.options.serviceUrl}/internal/whatsapp/send`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-internal-api-key": this.options.internalApiKey
      },
      body: JSON.stringify({
        phone: input.phone,
        template: "otp",
        variables: { code: "{{generated_by_provider}}" }
      })
    });

    return { expiresInSeconds: Number(process.env.OTP_TTL_SECONDS || 300), provider: "openwa" };
  }

  async verify(input: VerifyOtpInput) {
    if (this.options.mode === "stub") {
      return { verified: input.code === "000000", provider: "stub" };
    }

    // Real verification should compare against a stored, hashed OTP challenge.
    return { verified: false, provider: "openwa" };
  }
}
