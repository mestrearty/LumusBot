"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const say = require("say");
async function playText(params) {
    // Use default system voice and speed.
    console.log(params);
    await say.speak(`${params.viwerName} diz: ${params.message}`, 0.8);
    return "Falando...";
}
exports.playText = playText;
