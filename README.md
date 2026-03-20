# x-tweet-tracker-bot (Voyager)

Telegram admin bot UI for x-tweet-tracker.

This service **does not** connect to Postgres directly — it talks to `x-tweet-tracker-api` over HTTP.

## Environment variables
- `API_BASE_URL` — e.g. `https://x-tweet-tracker-production.up.railway.app` (или `x-tweet-tracker.railway.internal`)
- `API_TOKEN` — same value as API `ADMIN_TOKEN`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_ADMIN_USER_ID`

## Endpoints
- `GET /healthz`
- `POST /telegram/webhook`

## Railway
Build:
```bash
npm ci && npm run build
```

Start:
```bash
npm start
```

Webhook URL:
`https://<bot-service-domain>/telegram/webhook`
