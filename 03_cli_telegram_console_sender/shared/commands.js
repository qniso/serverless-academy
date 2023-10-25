import { Command } from "commander";
import { telegramBot } from "./bot.js";

export function useCommands() {

    const program = new Command();

    program.command("m")
        .description("This command to send message")
        .argument("<string>", "Your message")
        .action((value) => telegramBot(value, "m"));

    program.command("p")
        .description("This command to send picture")
        .argument("<path>", "Its path to your picture")
        .action((value) => telegramBot(value, "p"));

    program.parse();


}