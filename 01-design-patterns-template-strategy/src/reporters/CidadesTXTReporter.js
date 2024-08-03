import IReporter from "./IReporter.js";

export default class CidadesTXTReporter extends IReporter {
  report(cidades) {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < cidades.length; i++) {
      result += "* " + cidades[i]["Nome"] + "\n";
    }

    return result;
  }
}