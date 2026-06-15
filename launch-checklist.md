# Snugged.Shop Launch Checklist

Last updated: 2026-06-16

This is the root launch tracker for Snugged.Shop. Use it to keep the build, account setup, testing, and production readiness work visible in one place.

## Current Progress

- [x] Preserve Figma assets in `figma/`.
- [x] Initialize Git locally on `main`.
- [x] Create pnpm monorepo structure.
- [x] Add root repo hygiene files: `.gitignore`, env example, lint, format, TypeScript, and Turbo config.
- [x] Create custom Next.js storefront scaffold in `apps/storefront`.
- [x] Create Medusa backend scaffold in `apps/medusa`.
- [x] Create WhatsApp/OpenWA service scaffold in `apps/whatsapp-service`.
- [x] Add shared packages for UI helpers, config, analytics, and types.
- [x] Add sample fashion-only catalog with INR pricing and kids fashion included.
- [x] Add local cart storage using `snugged_cart`.
- [x] Add local wishlist storage using `snugged_wishlist`.
- [x] Add checkout OTP/payment skeleton with stub-safe behavior.
- [x] Add Razorpay provider abstraction and stub shape.
- [x] Add delivery provider abstraction and manual provider stub.
- [x] Add WhatsApp/OpenWA abstraction and dev stub mode.
- [x] Add Resend-ready email provider placeholder.
- [x] Add analytics wrappers for PostHog, GA4, Meta Pixel, Google Ads, and TikTok Pixel.
- [x] Add Sentry placeholders for storefront, Medusa, and WhatsApp service.
- [x] Add SEO helpers, sitemap, robots, JSON-LD helpers, and `llms.txt`.
- [x] Add docs for architecture, envs, deployment, SEO, OpenWA, social, and launch.
- [x] Verify `pnpm typecheck`.
- [x] Verify `pnpm lint`.
- [x] Verify `pnpm build`.
- [x] Verify storefront routes return HTTP 200 locally.

## GitHub

- [ ] Add GitHub remote: `https://github.com/ungaaaabungaaa/snugged.git`.
- [ ] Commit initial scaffold.
- [ ] Push `main` to GitHub.
- [ ] Confirm GitHub default branch is `main`.
- [ ] Add branch protection after first successful push.
- [ ] Add repository secrets after accounts are ready.

## Account Setup Still Needed

- [ ] Buy and activate SIM card for WhatsApp.
- [ ] Decide if the number will be WhatsApp Business App, OpenWA session, or later official WhatsApp Business API.
- [ ] Create Razorpay account.
- [ ] Complete Razorpay KYC.
- [ ] Get Razorpay key ID, key secret, and webhook secret.
- [ ] Create delivery provider or aggregator account.
- [ ] Get delivery API URL, API key, webhook secret, pickup address, and return address.
- [ ] Create Cloudflare R2 bucket.
- [ ] Get R2 account ID, bucket name, access key, secret key, endpoint, and public base URL.
- [ ] Create Resend account.
- [ ] Verify sender domain for email.
- [ ] Create Sentry organization/projects.
- [ ] Create PostHog project.
- [ ] Create or connect GA4 property.
- [ ] Create or connect Meta Pixel.
- [ ] Create or connect Google Ads tag.
- [ ] Create or connect TikTok Pixel.
- [ ] Confirm GST, invoice, business address, legal name, and support email.

## Local Development

- [ ] Install Docker Desktop or another Docker runtime.
- [ ] Run `docker compose up -d` for Postgres, Redis, and Meilisearch.
- [ ] Copy `.env.example` to local env files and fill dev-safe values.
- [ ] Start Medusa backend with `pnpm --filter @snugged/medusa dev`.
- [ ] Create local Medusa Admin user.
- [ ] Confirm Medusa Admin opens.
- [ ] Seed or manually create products in Medusa.
- [ ] Confirm India/INR region is available in Medusa.
- [ ] Confirm product images load from external URLs or R2.
- [ ] Start storefront with `pnpm --filter @snugged/storefront dev`.
- [ ] Start WhatsApp service with `pnpm --filter @snugged/whatsapp-service dev`.
- [ ] Confirm `GET /health` works for WhatsApp service.
- [ ] Confirm protected WhatsApp endpoints reject missing `x-internal-api-key`.

## Storefront QA

- [ ] Compare homepage against Figma `home.png`.
- [ ] Compare product detail against Figma `detail.png`.
- [ ] Compare cart against Figma `cart.png`.
- [ ] Compare wishlist against Figma `wishlist.png`.
- [ ] Compare AI try-on against Figma `tryon.png`.
- [ ] Test mobile viewport.
- [ ] Test tablet viewport.
- [ ] Test desktop viewport.
- [ ] Test `/`.
- [ ] Test `/shop`.
- [ ] Test `/shop/[category]`.
- [ ] Test `/product/[handle]`.
- [ ] Test `/cart`.
- [ ] Test `/wishlist`.
- [ ] Test `/checkout`.
- [ ] Test `/checkout/payment`.
- [ ] Test `/checkout/success`.
- [ ] Test `/checkout/failure`.
- [ ] Test `/account`.
- [ ] Test `/account/orders`.
- [ ] Test `/account/wishlist`.
- [ ] Test `/account/try-ons`.
- [ ] Test `/search`.
- [ ] Test `/ai-try-on`.
- [ ] Test policy pages.
- [ ] Test SEO landing pages.

## Ecommerce Behavior QA

- [ ] Product listing filters work.
- [ ] Product search works.
- [ ] Product detail size selection works.
- [ ] Sold-out products cannot be added to cart.
- [ ] One-of-one products cannot exceed quantity `1`.
- [ ] Cart add/remove/update works.
- [ ] Wishlist add/remove works.
- [ ] Wishlist move-to-cart works.
- [ ] Cart persists after page refresh.
- [ ] Wishlist persists after page refresh.
- [ ] Checkout OTP stub works with test code.
- [ ] Checkout address capture works.
- [ ] Payment success flow works.
- [ ] Payment failure flow works.
- [ ] Account placeholder pages are understandable and non-blocking.

## Backend And Integration QA

- [ ] Medusa Admin product creation works.
- [ ] Medusa cart creation works.
- [ ] Medusa order creation path is connected to checkout.
- [ ] Custom wishlist sync API works after auth.
- [ ] OTP send endpoint works in stub mode.
- [ ] OTP verify endpoint works in stub mode.
- [ ] Razorpay create-order stub works.
- [ ] Razorpay webhook route is added before production payments.
- [ ] Delivery booking stub works.
- [ ] Delivery webhook route is added before production shipping.
- [ ] R2 upload path is implemented before real product uploads.
- [ ] Resend transactional email path is connected.
- [ ] WhatsApp order notification path is connected.
- [ ] WhatsApp support reply path is connected.

## Production Readiness

- [ ] Pick AWS region.
- [ ] Create production Postgres.
- [ ] Create production Redis.
- [ ] Create production Meilisearch or managed search service.
- [ ] Provision application host or deployment platform.
- [ ] Configure domain DNS.
- [ ] Configure SSL.
- [ ] Configure Nginx or platform routing.
- [ ] Add production env vars.
- [ ] Configure CORS values.
- [ ] Configure secure cookies.
- [ ] Configure webhook secrets.
- [ ] Add backup plan for database.
- [ ] Add log retention.
- [ ] Add uptime monitoring.
- [ ] Add error alerts.
- [ ] Run production build on deployment target.
- [ ] Run checkout smoke test in production.
- [ ] Run payment test mode end-to-end.
- [ ] Run delivery sandbox/test booking.
- [ ] Confirm no COD option appears anywhere.
- [ ] Confirm all displayed prices are INR and tax-inclusive.

## Content And Operations

- [ ] Finalize brand copy.
- [ ] Finalize return policy.
- [ ] Finalize shipping policy.
- [ ] Finalize privacy policy.
- [ ] Finalize terms and conditions.
- [ ] Finalize FAQ.
- [ ] Add support email.
- [ ] Add support WhatsApp number.
- [ ] Add Instagram handle.
- [ ] Add product photography workflow.
- [ ] Add product measurement fields.
- [ ] Add condition grading rules.
- [ ] Add packaging workflow.
- [ ] Add inventory intake workflow.
- [ ] Add refund workflow.
- [ ] Add order cancellation workflow.
- [ ] Add customer support macros.

## Nice-To-Have After MVP

- [ ] Real AI try-on provider integration.
- [ ] Official WhatsApp Business API migration path.
- [ ] Product recommendation engine.
- [ ] Recently viewed products.
- [ ] Size guide modal.
- [ ] Fit notes and model measurements.
- [ ] Admin dashboard for operations metrics.
- [ ] Automated social product posting.
- [ ] Abandoned cart notifications.
- [ ] Loyalty or referral program.

