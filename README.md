<p align="center">
  <img src="./assets/voyager-bot-banner.svg" alt="Voyager Bot banner" />
</p>

<p align="center">
  Telegram admin UI for x-tweet-tracker (API-only)
</p>

<p align="center">
  <img alt="runtime" src="https://img.shields.io/badge/runtime-Node.js-339933" />
  <img alt="bot" src="https://img.shields.io/badge/Telegram-grammY-26A5E4" />
  <img alt="deploy" src="https://img.shields.io/badge/deploy-Railway-6B46C1" />
</p>

# x-tweet-tracker-bot (Voyager)

A Telegram bot that provides an admin UI for managing tracked X accounts.

This service **does not** connect to Postgres directly — it talks to `x-tweet-tracker-api` over HTTP.

## Environment variables
- `API_BASE_URL`
  - public: `https://x-tweet-tracker-production.up.railway.app`
  - private (Railway): `x-tweet-tracker.railway.internal` (auto → `http://...:8080`)
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

## BotFather command list
```
start - открыть админку Voyager
help - помощь по командам
list - список аккаунтов
add - добавить аккаунт (юзернейм или ссылка)
```
