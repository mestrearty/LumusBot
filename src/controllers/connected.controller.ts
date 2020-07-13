import { twitchClient } from "../twitchClient";
import { options } from "../consts";
class ConnectedController {
  async onConnected(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    twitchClient.say(
      options.channels[0],
      "Lumus na área pra deixar nossa live ainda mais divertida!!"
    );
  }
}

export default ConnectedController;
