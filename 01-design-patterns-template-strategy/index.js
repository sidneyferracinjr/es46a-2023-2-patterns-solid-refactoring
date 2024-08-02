import JSONFileReader from './src/JSONFileReader.js';
import JSONParser from './src/JSONParser.js';
import CidadesHTMLReporter from './src/CidadesHTMLReporter.js';
import CidadesTXTReporter from './src/CidadesTXTReporter.js';
import ReportProcessor from './src/ReportProcessor.js';

const [cmd, filename, format] = process.argv;

const fileReader = new JSONFileReader();
const parser = new JSONParser();

let reporter;

if (format === 'html') {
  reporter = new CidadesHTMLReporter();
} else if (format === 'txt') {
  reporter = new CidadesTXTReporter();
} else {
  throw new Error('Formato não suportado');
}

const processor = new ReportProcessor(fileReader, parser, reporter);
const output = processor.process('./data/cidades-2.json');
console.log(output);