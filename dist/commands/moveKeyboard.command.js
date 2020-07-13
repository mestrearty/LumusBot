"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robot = require("robotjs");
function moveKeyboard(params) {
    const type = params.message.split(" ")[0].trim();
    let key = `w`;
    if (type === `back` || type === `s`)
        key = `s`;
    if (type === `left` || type === `a`)
        key = `a`;
    if (type === `right` || type === `d`)
        key = `d`;
    console.log(`tipo`, type);
    console.log(key);
    robot.setKeyboardDelay(5000);
    robot.keyToggle(key, "down");
    robot.keyToggle(key, "up");
    return `Tac Tac Tac! A opa, quem controla agora é nois!`;
}
exports.moveKeyboard = moveKeyboard;
