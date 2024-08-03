import FormatterHTML from "./FormatterHTML.js";
import FormatterTXT from "./FormatterTXT.js";

export default class FormatterFactory {
  static createFormatter(type) {
    switch (type) {
      case "html":
        return new FormatterHTML();
      case "txt":
        return new FormatterTXT();
      default:
        throw new Error("Formato Desconhecido.");
    }
  }
}