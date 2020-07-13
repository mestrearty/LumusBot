"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmi = require("tmi.js");
const consts_1 = require("./consts");
exports.twitchClient = tmi.client(consts_1.options);
