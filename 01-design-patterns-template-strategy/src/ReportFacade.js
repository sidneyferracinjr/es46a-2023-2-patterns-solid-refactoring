import JSONFileReader from './JSONFileReader.js';
import JSONParser from './JSONParser.js';
import ReportProcessor from './ReportProcessor.js';

class ReportFacade {
  constructor(format) {
    this.fileReader = new JSONFileReader();
    this.parser = new JSONParser();
    this.processor = new ReportProcessor(this.fileReader, this.parser, format);
  }

  generateReport(filePath) {
    return this.processor.process(filePath);
  }
}

export default ReportFacade;