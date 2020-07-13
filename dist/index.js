"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twitchClient_1 = require("./twitchClient");
const liveTime_util_1 = require("./utils/liveTime.util");
const connected_controller_1 = require("./controllers/connected.controller");
const message_controller_1 = require("./controllers/message.controller");
const connectedController = new connected_controller_1.default();
const messageController = new message_controller_1.default();
// Register our event handlers (defined below)
twitchClient_1.twitchClient.on("message", messageController.onMessageHandler);
twitchClient_1.twitchClient.on("connected", connectedController.onConnected);
//twitchClient._onMessage(onJoin);
// Connect to Twitch:
twitchClient_1.twitchClient.connect();
//Creditando valores na continha
setInterval(liveTime_util_1.creditCurrentViewers, 60000);
//https://robotjs.io/docs/syntax#keyboard
