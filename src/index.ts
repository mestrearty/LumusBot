import { twitchClient } from "./twitchClient";
import { creditCurrentViewers } from "./utils/liveTime.util";
import ConnectController from "./controllers/connected.controller";
import MessageController from "./controllers/message.controller";

const connectedController = new ConnectController();
const messageController = new MessageController();

// Register our event handlers (defined below)
twitchClient.on("message", messageController.onMessageHandler);
twitchClient.on("connected", connectedController.onConnected);

//twitchClient._onMessage(onJoin);
// Connect to Twitch:
twitchClient.connect();

//Creditando valores na continha
setInterval(creditCurrentViewers,60000);
//https://robotjs.io/docs/syntax#keyboard