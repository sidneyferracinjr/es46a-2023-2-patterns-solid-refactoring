import IReporterTest from "./IReporterTest.js";

export default class CidadesTXTReporterTest extends IReporterTest {
  report(cidades) {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < cidades.length; i++) {
      result += "* " + cidades[i]["Nome"] + "\n";
    }

    return result;
  }
}