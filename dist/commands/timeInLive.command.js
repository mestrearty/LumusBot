"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viwer_model_1 = require("../model/viwer.model");
async function timeInLive(params) {
    return `Você já assistiu um total de ${await new viwer_model_1.default().getTimeInLive(params.viwerName)} minutos. Achavo que é bem pouco u.u !`;
}
exports.timeInLive = timeInLive;
