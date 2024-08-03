import * as fs from "node:fs";
import IFileReader from "../interfaces/IFileReader.js";

export default class JSONFileReader extends IFileReader {
  read(caminho) {
    return fs.readFileSync(caminho, "utf-8");
  }
}