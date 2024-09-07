const TelegramBot = require('node-telegram-bot-api');

const token = '7426843591:AAGSs4KYCBhuoBz3PMzidiCKtT8-Y5pKJBQ';
const url = 'https://appstoretgminiapp.netlify.app/';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId,'Привет! Мы открыли наш магазин в приложениях телеграм, нажимай на кнопку снизу чтобы покупать новые новинки', {
      reply_markup: {
          inline_keyboard: [
            [
              {text: 'Открыть магазин в telegram-mini-app', web_app: {url}}
            ]
          ]
      }
    });
  }

});



