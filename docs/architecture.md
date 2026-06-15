# Architecture

Snugged.Shop is a pnpm monorepo with three runnable apps and shared typed packages.

## Storefront

`apps/storefront` is a custom Next.js 15 App Router app. It uses static sample products for Day 1, real localStorage cart/wishlist behavior, SEO metadata helpers, and placeholder integration clients.

User flow:

1. Browse products without login.
2. Add cart and wishlist locally.
3. Start checkout.
4. Verify phone through WhatsApp/OpenWA OTP stub.
5. Sync cart and wishlist after auth.
6. Create Razorpay payment session stub.
7. Simulate success/failure until keys are connected.

## Backend

`apps/medusa` is the Medusa v2 backend scaffold. It owns product/order/customer backend behavior, Admin, custom wishlist sync, and provider abstractions.

Custom boundaries:

- `src/providers/otp.ts`: WhatsApp/OpenWA-first OTP provider.
- `src/providers/razorpay.ts`: Razorpay order/session abstraction.
- `src/providers/delivery.ts`: provider-neutral shipment abstraction.
- `src/providers/tryon.ts`: AI try-on job abstraction.
- `src/modules/wishlist`: customer wishlist sync module.

## WhatsApp Service

`apps/whatsapp-service` is isolated from Medusa and the storefront. Internal routes require `x-internal-api-key`. OpenWA can run in stub mode locally, then connect to an actual WhatsApp session.

## Data

Product metadata follows the shared `FashionProductMetadata` type. One-of-one products should usually have quantity `1`, inventory tracking enabled, and sold-out behavior visible in storefront and enforced in backend workflows.
