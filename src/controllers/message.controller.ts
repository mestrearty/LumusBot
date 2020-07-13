//twitch client
import { twitchClient } from "../twitchClient";
//middlewares
import { spendTime } from "../utils/spendTime.util";
//commands
import { moveKeyboard } from "../commands/moveKeyboard.command";
import { moveMouse } from "../commands/moveMouse.command";
import { rollDice } from "../commands/rolldice.command";
import { wallet } from "../commands/wallet.command";
import { playSound } from "../commands/playSonuds.command";
import { timeInLive } from "../commands/timeInLive.command";

const commandsObjectList = {
  "!rollDice": { currency: 10, commandFunction: rollDice },
  "!play": { currency: 4, commandFunction: playSound },
  //"!moveMouse": { currency: 35, commandFunction: moveMouse },
  //"!move": { currency: 35, commandFunction: moveKeyboard },
  "!wallet": { currency: 0, commandFunction: wallet },
  "!liveTime": { currency: 0, commandFunction: timeInLive },
};

class MessageController {
  async onMessageHandler(target, context, msg, self) {
    if (self) return; // Ignore messages from the bot
    const viwerName = context.username;
    const commandMessage = msg.trim().split(" ")[0];
    const chatMessage = msg.replace(commandMessage, "").trim();
    // Remove whitespace from chat message
    const command = commandsObjectList[commandMessage];
    if (msg.trim() === "!commands") {
      twitchClient.say(
        target,
        `!rollDice  P$10 ~ !play <tipo> <nome|list|texto> P$4 ~ !wallet`
      );
      return;
    }

    if (command) {
      console.log(chatMessage);

      const returningMessage = await spendTime(
        { viwerName, commandMessage, message: chatMessage },
        command
      );
      if (returningMessage) twitchClient.say(target, returningMessage);
    } else if (msg[0].includes("!")) {
      twitchClient.say(target, `* Comando não conhecido ${msg}`);
    }
  }
}

export default MessageController;
