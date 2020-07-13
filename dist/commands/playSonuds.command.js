"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sound = require("sound-play");
const path = require("path");
const fs = require("fs");
const playText_command_1 = require("../commands/playText.command");
const viwer_model_1 = require("../model/viwer.model");
async function play(params) {
    try {
        if (params.type == "list") {
            await new viwer_model_1.default().setViwerWallet(params.viwerName, 4);
            return "scary | cats | random | meme ";
        }
        if (params.type == "text") {
            await new viwer_model_1.default().setViwerWallet(params.viwerName, -6);
            return await playText_command_1.playText({
                viwerName: params.viwerName,
                message: params.textBody,
            });
        }
        const filePath = path.join(__dirname, "../../global/songs/" + params.type);
        const songs = await fs.readdirSync(filePath);
        if (params.wantList) {
            await new viwer_model_1.default().setViwerWallet(params.viwerName, 4);
            let songList;
            songs.forEach((song) => {
                songList += song.replace(`.mp3`, " /-/ ");
            });
            songList = songList.replace("undefined", "");
            return songList;
        }
        let file = params.textBody
            ? params.textBody + ".mp3"
            : songs[Math.floor(Math.random() * songs.length)];
        if (songs.includes(file)) {
            sound.play(filePath + "/" + file);
            return `Tocando: ${file}`;
        }
        return "Que pena, som não encontrado :/ Mas não fica triste. Só entrar em nosso discord, que lá você pode envair seu audio para estar em nossa próxima live! https://discord.gg/QMZFEnS";
    }
    catch (e) {
        console.log(e);
        return "Alguma magia neo turibana não permitiu que tocássemos seu som! Tem certeza que o enviou no nosso discord?";
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
    soundParams.textBody = params.message.replace(soundParams.type, "").trim();
    if (soundParams.textBody === "list")
        soundParams.wantList = true;
    console.log(soundParams);
    return await play(soundParams);
}
exports.playSound = playSound;
