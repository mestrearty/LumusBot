"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sound = require("sound-play");
const path = require("path");
const fs = require("fs");
async function play(type) {
    try {
        const filePath = path.join(__dirname, "../../global/songs/" + type);
        const songs = await fs.readdirSync(filePath);
        const randomElement = songs[Math.floor(Math.random() * songs.length)];
        sound.play(filePath + "/" + randomElement);
        return `Tocando: ${randomElement}`;
    }
    catch (e) {
        console.log(e);
        return "Não fois possível tocar";
    }
}
exports.play = play;
async function playSound() {
}
exports.playSound = playSound;
async function playScary() {
    return await play("scary");
}
exports.playScary = playScary;
async function playCat() {
    return await play("cats");
}
exports.playCat = playCat;
async function playRandom() {
    return await play("random");
}
exports.playRandom = playRandom;
async function playMeme() {
    return await play("meme");
}
exports.playMeme = playMeme;
