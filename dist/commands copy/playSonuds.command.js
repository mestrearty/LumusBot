"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sound = require("sound-play");
const path = require("path");
const fs = require("fs");
const playText_command_1 = require("../commands/playText.command");
const viwer_model_1 = require("../model/viwer.model");
async function play(params) {
    try {
        if (params.type == "text") {
            console.log(`entrei`);
            return await playText_command_1.playText({
                viwerName: params.viwerName,
                message: params.textBody,
            });
        }
        const filePath = path.join(__dirname, "../../global/songs/" + params.type);
        const songs = await fs.readdirSync(filePath);
        if (params.wantList) {
            await new viwer_model_1.default().setViwerWallet(params.viwerName, 4);
            return songs;
        }
        let file = params.textBody
            ? params.textBody + ".mp3"
            : songs[Math.floor(Math.random() * songs.length)];
        sound.play(filePath + "/" + file);
        return `Tocando: ${file}`;
    }
    catch (e) {
        console.log(e);
        return "Som não encontrado";
    }
}
exports.play = play;
async function playSound(params) {
    const soundParams = {
        type: undefined,
        textBody: undefined,
        viwerName: params.viwerName,
        wantList: false,
    };
    soundParams.type = params.message.split(" ")[0].trim();
    soundParams.textBody = params.message.split(" ")[1];
    if (soundParams.textBody === "list")
        soundParams.wantList = true;
    console.log(soundParams);
    return await play(soundParams);
}
exports.playSound = playSound;
