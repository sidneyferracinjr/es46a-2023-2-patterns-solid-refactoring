import JSONFileReaderTest from '../readers/JSONFileReaderTest.js';
import JSONParserTest from '../parsers/JSONParserTest.js';
import ReportProcessorTest from './ReportProcessorTest.js';

class ReportFacadeTest {
  constructor(format) {
    this.fileReader = new JSONFileReaderTest();
    this.parser = new JSONParserTest();
    this.processor = new ReportProcessorTest(this.fileReader, this.parser, format);
  }

  generateReport(filePath) {
    return this.processor.process(filePath);
  }
}

export default ReportFacadeTest;