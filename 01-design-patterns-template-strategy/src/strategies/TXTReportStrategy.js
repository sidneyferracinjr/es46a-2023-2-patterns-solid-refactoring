import IStrategy from '../interfaces/IStrategy.js';

class TXTReportStrategy extends IStrategy{
    generateReport(data) {
        let txt = `Relatório de Nomes de Cidades
        =============================\n`;
      
          for (let i = 0; i < cities.length; i++) {
            txt += `- ${cities[i]["Nome"]}\n`;
          }
          return txt;
    }
}

module.exports = TXTReportStrategy;