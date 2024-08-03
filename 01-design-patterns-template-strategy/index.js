import ReportFacade from './src/ReportFacade.js';

const [cmd, filename, filepath, format] = process.argv;

// comando: node index.js ./data/cidades.json html
const reportFacade = new ReportFacade(format);
const output = reportFacade.generateReport(filepath);
console.log(output);