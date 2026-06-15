# Deployment

## Recommended First Deployment

- Storefront: deploy separately as the public Next.js app for `snugged.shop`.
- Medusa: deploy on AWS ECS or EC2 behind HTTPS.
- WhatsApp service: deploy separately from Medusa and protect all internal endpoints.
- Database: AWS RDS PostgreSQL.
- Redis: AWS ElastiCache.
- Search: Meilisearch on EC2 or a managed equivalent.
- Media: Cloudflare R2.

## Order

1. Create production R2 bucket and public media base URL.
2. Provision PostgreSQL, Redis, and Meilisearch.
3. Deploy Medusa with production env vars.
4. Create Medusa Admin user.
5. Seed or manually create product catalog.
6. Deploy WhatsApp service in stub mode.
7. Connect OpenWA session and switch service to OpenWA mode.
8. Deploy storefront with Medusa URL and publishable key.
9. Connect Razorpay webhooks.
10. Connect delivery provider.
11. Verify checkout, payment, order notification, and shipping updates.

## Domain

Point `snugged.shop` to the storefront. Backend services should use private/internal URLs where possible.
