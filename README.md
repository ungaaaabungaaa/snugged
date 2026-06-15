# Snugged.Shop

Fashion-only ecommerce foundation for Snugged.Shop.

The MVP is scoped to thrift clothes, new/pre-owned fashion, jewellery, bags, shoes, watches, belts, sunglasses, fashion accessories, one-of-one pieces, and AI try-on enabled fashion items. It intentionally excludes vegetables, hydroponics, 3D printed toys, pottery, food products, subscriptions, and marketplace flows.

## Apps

- `apps/storefront`: custom Next.js 15 storefront.
- `apps/medusa`: Medusa v2 backend scaffold with Admin, typed providers, seed catalog, and wishlist module.
- `apps/whatsapp-service`: isolated WhatsApp/OpenWA service for OTP, notifications, and support.

## Packages

- `packages/types`: shared product, cart, wishlist, delivery, order, and try-on types.
- `packages/config`: brand, categories, and sample fashion product data.
- `packages/analytics`: no-op-safe analytics event wrapper.
- `packages/ui`: shared class and token helpers.

## Local Setup

```bash
pnpm install
cp .env.example .env
cp apps/storefront/.env.example apps/storefront/.env.local
cp apps/medusa/.env.example apps/medusa/.env
cp apps/whatsapp-service/.env.example apps/whatsapp-service/.env
docker compose up -d
pnpm --filter @snugged/storefront dev
pnpm --filter @snugged/medusa dev
pnpm --filter @snugged/whatsapp-service dev
```

Default local URLs:

- Storefront: `http://localhost:3000`
- Medusa/Admin: `http://localhost:9000`
- WhatsApp service health: `http://localhost:3100/health`
- Meilisearch: `http://localhost:7700`

## GitHub Remote

The local repo is initialized. Add your empty GitHub repo URL when ready:

```bash
git remote add origin <github-repo-url>
git push -u origin main
```

## First Manual Accounts

- Cloudflare R2 bucket and S3-compatible credentials.
- WhatsApp number/SIM and OpenWA session.
- Razorpay account and webhook secret.
- Delivery provider/aggregator portal.
- Resend, Sentry, PostHog, GA4, Meta, Google Ads, and TikTok IDs.
- GST/invoice details when the business setup is ready.

## Test Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Cart uses `localStorage.snugged_cart`. Wishlist uses `localStorage.snugged_wishlist`. Checkout OTP accepts `000000` in stub mode.
