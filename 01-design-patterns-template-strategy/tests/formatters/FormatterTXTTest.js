import IFormatterTest from "../interfaces/IFormatterTest.js";

export default class FormatterTXTTest extends IFormatterTest {
  output(cities) {
    let txt = `Relatório de Nomes de Cidades
  =============================\n`;

    for (let i = 0; i < cities.length; i++) {
      txt += `- ${cities[i]["Nome"]}\n`;
    }
    return txt;
  }
}
