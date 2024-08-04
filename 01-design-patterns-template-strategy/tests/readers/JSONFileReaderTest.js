import * as fs from "node:fs";
import IFileReaderTest from "../interfaces/IFileReaderTest.js";

export default class JSONFileReaderTest extends IFileReaderTest {
  read(caminho) {
    return fs.readFileSync(caminho, "utf-8");
  }
}