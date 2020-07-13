"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twitchClient_1 = require("../twitchClient");
const consts_1 = require("../consts");
class ConnectedController {
    async onConnected(addr, port) {
        console.log(`* Connected to ${addr}:${port}`);
        twitchClient_1.twitchClient.say(consts_1.options.channels[0], "Lumus na área pra deixar nossa live ainda mais divertida!!");
    }
}
exports.default = ConnectedController;
