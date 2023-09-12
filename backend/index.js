const TelegramBot = require('node-telegram-bot-api');

const token = "5928963061:AAF8wB96bEieTF7tQlQBhFNTEacEJ8UKptM"
const url = "https://nextjs-test-beryl-zeta.vercel.app/"

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
    const text = msg.text
if(text == "/start") {
    await bot.sendMessage(chatId, "Hello", {
        reply_markup: {
            inline_keyboard:[
                [{text: "Перейти на сайт", web_app: {url:url}}]
            ]
        }
    })
}
  bot.sendMessage(chatId, 'Received your message');
});