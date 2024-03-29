"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
exports.asyncForEach = asyncForEach;
exports.asyncForEach = asyncForEach;
