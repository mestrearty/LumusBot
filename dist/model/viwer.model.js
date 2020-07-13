"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const twitchApi_1 = require("../twitchApi");
class ViwerModel {
    async setViwer(viwerName, params) {
        const viwerObjetcList = await this.getViwerList();
        if (params) {
            viwerObjetcList[viwerName] = params;
        }
        else {
            viwerObjetcList[viwerName] = { wallet: 0, totalLiveTime: 0 };
        }
        await this.saveViwer(viwerObjetcList);
    }
    async setViwerWallet(viwerName, value) {
        const viwerObjetcList = await this.getViwerList();
        if (viwerObjetcList[viwerName]) {
            viwerObjetcList[viwerName].wallet += value;
            await this.saveViwer(viwerObjetcList);
        }
        else {
            await this.setViwer(viwerName);
        }
        return viwerObjetcList[viwerName].wallet;
    }
    async setViwerTime(viwerName, time) {
        const viwerObjetcList = await this.getViwerList();
        if (viwerObjetcList[viwerName]) {
            viwerObjetcList[viwerName].totalLiveTime += time;
            await this.saveViwer(viwerObjetcList);
        }
        else {
            await this.setViwer(viwerName);
        }
    }
    async getViwer(viwerName) {
        const viwerList = await this.getViwerList();
        if (viwerList[viwerName] === undefined) {
            await this.setViwer(viwerName);
            return await this.getViwer(viwerName);
        }
        return viwerList[viwerName];
    }
    async getTimeInLive(viwerName) {
        const viwerList = await this.getViwerList();
        if (viwerList[viwerName] === undefined) {
            await this.setViwer(viwerName);
            return await this.getViwer(viwerName);
        }
        return viwerList[viwerName].totalLiveTime;
    }
    async getViwerList() {
        return await JSON.parse(fs.readFileSync(`./global/json/viwers.json`, "utf8"));
    }
    async saveViwer(viwerObject) {
        fs.writeFileSync(`./global/json/viwers.json`, JSON.stringify(viwerObject));
    }
    async getCurrentViwersOnLive() {
        const requestApiResult = await new twitchApi_1.default().getRoute("/group/user/artficer/chatters");
        const viwers = new Array();
        await requestApiResult.chatters.broadcaster.forEach((element) => {
            viwers.push(element);
        });
        await requestApiResult.chatters.vips.forEach((element) => {
            viwers.push(element);
        });
        await requestApiResult.chatters.moderators.forEach((element) => {
            viwers.push(element);
        });
        await requestApiResult.chatters.staff.forEach((element) => {
            viwers.push(element);
        });
        await requestApiResult.chatters.admins.forEach((element) => {
            viwers.push(element);
        });
        await requestApiResult.chatters.global_mods.forEach((element) => {
            viwers.push(element);
        });
        await requestApiResult.chatters.viewers.forEach((element) => {
            viwers.push(element);
        });
        return viwers;
    }
}
exports.default = ViwerModel;
