"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viwer_model_1 = require("../model/viwer.model");
async function rollDice(params) {
    const sides = 20;
    const diceResult = Math.floor(Math.random() * sides) + 1;
    console.log(diceResult);
    await new viwer_model_1.default().setViwerWallet(params.viwerName, diceResult);
    return "Você rolou um: " + diceResult.toString();
}
exports.rollDice = rollDice;
