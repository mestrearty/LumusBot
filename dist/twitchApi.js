"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
axios_1.default.defaults.baseURL = `http://tmi.twitch.tv/`;
class APIRequest {
    async getRoute(route) {
        return await axios_1.default
            .get(route)
            .then((res) => res.data)
            .catch((e) => e);
    }
}
exports.default = APIRequest;
