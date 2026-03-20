import 'dotenv/config';
import express from 'express';
import { createTelegramBot } from './telegram-bot.js';

const app = express();
app.use(express.json());

app.get('/healthz', (_req, res) => res.status(200).send('ok'));

const bot = createTelegramBot();

// grammY requires bot.init() in webhook-only mode
bot.init().then(
  () => console.log('Telegram bot initialized'),
  (e) => console.error('Telegram bot init failed', e),
);

app.post('/telegram/webhook', async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.sendStatus(200);
  } catch (e) {
    console.error('telegram webhook error', e);
    res.sendStatus(500);
  }
});

const PORT = Number(process.env.PORT ?? 3000);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`x-tweet-tracker-bot listening on 0.0.0.0:${PORT}`);
});
