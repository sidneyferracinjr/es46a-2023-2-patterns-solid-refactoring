import IParserTest from "../interfaces/IParserTest.js";

export default class JSONParserTest extends IParserTest {
  parse(data) {
    return JSON.parse(data);
  }
}