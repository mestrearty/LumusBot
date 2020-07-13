import * as tmi from "tmi.js";
import { options } from "./consts";
export const twitchClient = tmi.client(options);