import ReportFacade from './src/services/ReportFacade.js';

const [cmd, filename, filepath, format] = process.argv;

// comando: node index.js <caminho do arquivo json> <formato do relatório>
const reportFacade = new ReportFacade(format);
const output = reportFacade.generateReport(filepath);
console.log(output);