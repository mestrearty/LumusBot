"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robot = require("robotjs");
function moveKeyboard() {
    // Speed up the mouse.
    robot.setMouseDelay(2);
    var twoPI = Math.PI * 2.0;
    var screenSize = robot.getScreenSize();
    var height = screenSize.height / 2 - 10;
    var width = screenSize.width;
    for (var x = 0; x < width; x++) {
        let y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }
    return `Tac Tac Tac! A opa, quem controla agora é nois!`;
}
exports.moveKeyboard = moveKeyboard;
