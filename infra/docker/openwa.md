# OpenWA Local Runtime

OpenWA is kept outside the main `docker-compose.yml` because session persistence, QR login, and browser runtime behavior need deliberate setup.

For a disposable local proof of life:

```bash
docker run -p 8080:8080 --init openwa/wa-automate
```

For the Snugged service, protect the runtime with an API key:

```bash
npx @open-wa/wa-automate@4.76.0 --port 8080 --api-key "replace-with-secret"
```

Then set:

```env
OPENWA_API_URL=http://localhost:8080
OPENWA_API_KEY=replace-with-secret
OPENWA_MODE=openwa
```

Keep `OPENWA_MODE=stub` until the WhatsApp number and QR/session setup are ready.
