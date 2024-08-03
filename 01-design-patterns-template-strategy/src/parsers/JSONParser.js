import IParser from "../interfaces/IParser.js";

export default class JSONParser extends IParser {
  parse(data) {
    return JSON.parse(data);
  }
}