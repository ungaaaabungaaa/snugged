# AWS Deployment Notes

Planned split:

- Storefront: deploy separately as a Next.js app.
- Backend services on AWS: Medusa, PostgreSQL, Redis, Meilisearch, and WhatsApp service.
- Product images: Cloudflare R2, using S3-compatible URLs.

Recommended first AWS shape:

- ECS or EC2 for `apps/medusa`.
- ECS or EC2 for `apps/whatsapp-service`.
- RDS PostgreSQL.
- ElastiCache Redis.
- Meilisearch on a small EC2 instance or managed search alternative later.
- CloudWatch logs for backend services.

Do not put real secrets in this repo. Use AWS SSM Parameter Store, Secrets Manager, or deployment platform env vars.
