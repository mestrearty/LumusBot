"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viwer_model_1 = require("../model/viwer.model");
async function creditCurrentViewers() {
    try {
        const viwer = new viwer_model_1.default();
        const viwersList = await viwer.getCurrentViwersOnLive();
        await asyncForEach(viwersList, async (viwerTag) => {
            await viwer.setViwerWallet(viwerTag, 1);
            await viwer.setViwerTime(viwerTag, 1);
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.creditCurrentViewers = creditCurrentViewers;
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
