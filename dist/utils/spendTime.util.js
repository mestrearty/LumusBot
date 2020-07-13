"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viwer_model_1 = require("../model/viwer.model");
async function spendTime(params, commandObject) {
    const viwer = await new viwer_model_1.default().getViwer(params.viwerName);
    let newBalance = viwer.wallet - commandObject.currency;
    if (newBalance >= 0) {
        const msg = await commandObject.commandFunction(params);
        newBalance = await new viwer_model_1.default().setViwerWallet(params.viwerName, -commandObject.currency);
        return `${msg}! Saldo Atual: P$ ${newBalance}`;
    }
    return `Você não possui créditos suficiente! P$ ${viwer.wallet}`;
}
exports.spendTime = spendTime;
