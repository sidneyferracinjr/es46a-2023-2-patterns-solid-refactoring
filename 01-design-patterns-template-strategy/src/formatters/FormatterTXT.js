import IFormatter from "../interfaces/IFormatter.js";

export default class FormatterTXT extends IFormatter {
  output(cities) {
    let txt = `Relatório de Nomes de Cidades
  =============================\n`;

    for (let i = 0; i < cities.length; i++) {
      txt += `- ${cities[i]["Nome"]}\n`;
    }
    return txt;
  }
}
