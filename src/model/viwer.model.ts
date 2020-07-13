import * as fs from "fs";
import twitchAPI from "../twitchApi";

class ViwerModel {
  async setViwer(viwerName: string, params?: object) {
    const viwerObjetcList = await this.getViwerList();
    if (params) {
      viwerObjetcList[viwerName] = params;
    } else {
      viwerObjetcList[viwerName] = { wallet: 0, totalLiveTime: 0 };
    }
    await this.saveViwer(viwerObjetcList);
  }
  async setViwerWallet(viwerName: string, value: Number) {
    const viwerObjetcList = await this.getViwerList();

    if (viwerObjetcList[viwerName]) {
      viwerObjetcList[viwerName].wallet += value;
      await this.saveViwer(viwerObjetcList);
    } else {
      await this.setViwer(viwerName);
    }
    return viwerObjetcList[viwerName].wallet;
  }
  async setViwerTime(viwerName: string, time: Number) {
    const viwerObjetcList = await this.getViwerList();

    if (viwerObjetcList[viwerName]) {
      viwerObjetcList[viwerName].totalLiveTime += time;
      await this.saveViwer(viwerObjetcList);
    } else {
      await this.setViwer(viwerName);
    }
  }

  async getViwer(viwerName: string) {
    const viwerList = await this.getViwerList();
    if (viwerList[viwerName] === undefined) {
      await this.setViwer(viwerName);
      return await this.getViwer(viwerName);
    }
    return viwerList[viwerName];
  }
  async getTimeInLive(viwerName: string) {
    const viwerList = await this.getViwerList();
    if (viwerList[viwerName] === undefined) {
      await this.setViwer(viwerName);
      return await this.getViwer(viwerName);
    }
    return viwerList[viwerName].totalLiveTime;
  }

  async getViwerList() {
    return await JSON.parse(
      fs.readFileSync(`./global/json/viwers.json`, "utf8")
    );
  }

  private async saveViwer(viwerObject: object) {
    fs.writeFileSync(`./global/json/viwers.json`, JSON.stringify(viwerObject));
  }

  async getCurrentViwersOnLive(): Promise<any> {
    const requestApiResult = await new twitchAPI().getRoute(
      "/group/user/artficer/chatters"
    );
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

export default ViwerModel;
