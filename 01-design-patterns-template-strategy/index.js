import JSONFileReader from './src/JSONFileReader.js';
import JSONParser from './src/JSONParser.js';
import ReportProcessor from './src/ReportProcessor.js';

const [cmd, filename, format] = process.argv;

const fileReader = new JSONFileReader();
const parser = new JSONParser();

const processor = new ReportProcessor(fileReader, parser, format);
const output = processor.process('./data/cidades-2.json');
console.log(output);