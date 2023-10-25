import TelegramBot from "node-telegram-bot-api";

const token = "6700874451:AAGB-NGfLR6ezVJnZdQh8lSdhFFh1igcfWQ";
const chatId = 429906165;

export function telegramBot(message, method) {
    console.log(token);

    const bot = new TelegramBot(token);

    if (method == "m") {
        bot.sendMessage(chatId, message);
    }
    if (method == "p") {
        bot.sendPhoto(chatId, message);
    }
}
