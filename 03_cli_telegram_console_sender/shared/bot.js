import TelegramBot from "node-telegram-bot-api";

const token = "";// Input tour bot token
const chatId = 0; // Input tour chatID

console.log(token, chatId);
process.exit(1);
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
