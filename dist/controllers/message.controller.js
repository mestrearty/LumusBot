"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//twitch client
const twitchClient_1 = require("../twitchClient");
//middlewares
const spendTime_util_1 = require("../utils/spendTime.util");
//commands
const moveKeyboard_command_1 = require("../commands/moveKeyboard.command");
const moveMouse_command_1 = require("../commands/moveMouse.command");
const rolldice_command_1 = require("../commands/rolldice.command");
const wallet_command_1 = require("../commands/wallet.command");
const playSonuds_command_1 = require("../commands/playSonuds.command");
const timeInLive_command_1 = require("../commands/timeInLive.command");
const commandsObjectList = {
    "!rollDice": { currency: 10, commandFunction: rolldice_command_1.rollDice },
    "!play": { currency: 4, commandFunction: playSonuds_command_1.playSound },
    "!moveMouse": { currency: 35, commandFunction: moveMouse_command_1.moveMouse },
    "!move": { currency: 35, commandFunction: moveKeyboard_command_1.moveKeyboard },
    "!wallet": { currency: 0, commandFunction: wallet_command_1.wallet },
    "!liveTime": { currency: 0, commandFunction: timeInLive_command_1.timeInLive },
};
class MessageController {
    async onMessageHandler(target, context, msg, self) {
        if (self)
            return; // Ignore messages from the bot
        const viwerName = context.username;
        const commandMessage = msg.trim().split(" ")[0];
        const chatMessage = msg.replace(commandMessage, "").trim();
        // Remove whitespace from chat message
        const command = commandsObjectList[commandMessage];
        if (msg.trim() === "!commands") {
            twitchClient_1.twitchClient.say(target, `!rollDice  P$10 ~ !play <tipo> <nome|list|texto> P$4 ~ !wallet`);
            return;
        }
        if (command) {
            console.log(chatMessage);
            const returningMessage = await spendTime_util_1.spendTime({ viwerName, commandMessage, message: chatMessage }, command);
            if (returningMessage)
                twitchClient_1.twitchClient.say(target, returningMessage);
        }
        else if (msg[0].includes("!")) {
            twitchClient_1.twitchClient.say(target, `* Comando não conhecido ${msg}`);
        }
    }
}
exports.default = MessageController;
