import axios from "axios";
axios.defaults.baseURL = `http://tmi.twitch.tv/`;

export default class APIRequest {
  async getRoute(route: string) {
    return await axios
      .get(route)
      .then((res) => res.data)
      .catch((e) => e);
  }
}
