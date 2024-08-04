import IFormatterTest from "../interfaces/IFormatterTest.js";

export default class FormatterHTMLTest extends IFormatterTest {
  output(cities) {
    let html = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
      <ul>
  `;

    for (let i = 0; i < cities.length; i++) {
      html += `     <li>${cities[i]["Nome"]}</li>\n`;
    }

    html += `
      </ul>
    </body>
  </html>`;

    return html;
  }
}