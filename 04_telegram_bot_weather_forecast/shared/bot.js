import TelegramBot from "node-telegram-bot-api";
import { getWeather } from "./index.js";

const token = ""; // Your token
const chatId = 0; // Your chat id

export function telegramBot(){
    const bot = new TelegramBot(token, {polling: true});
    const weather = getWeather();

    bot.sendMessage(chatId, "Press button to see weather forecast in Dnipro", {
        reply_markup: {
            keyboard: [["Forecast in Dnipro"]]
        }
    });

    bot.on("text", message => {
        bot.sendMessage(chatId, "Bot is checking weather forecast", {
                reply_markup: {
                    keyboard: [["at intervals of 3 hours"], ["at intervals of 6 hours"]]
                }
        })

        if(message.text == "at intervals of 3 hours"){
            generateMessage(bot, weather);

            setInterval(()=> {
                generateMessage(bot, weather);
            }, 10800000) // 3 hours in ms
        }

        if(message ==  "at intervals of 6 hours"){
            generateMessage(bot, weather);

            setInterval(()=> {
                generateMessage(bot, weather);
            }, 21600000) //6 hours in ms
        }
    })
}

function generateMessage(bot, weather){
    weather.then(result => {
        const weatherForecast = result.list;

        let data = weatherForecast.map(item => {
            return `\nDate: ${item.dt_txt},\nTemperature: ${item.main.temp},\nFeels_like: ${item.main.feels_like}\n`;
        });

        bot.sendMessage(chatId, `Weather forecast:\n ${data.join("")}`);
    })
    
}
