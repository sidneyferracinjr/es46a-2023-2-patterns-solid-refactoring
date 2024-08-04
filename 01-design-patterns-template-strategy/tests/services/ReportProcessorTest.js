import FormatterFactoryTest from '../factories/FormatterFactoryTest.js';

class ReportProcessorTest {
  constructor(fileReader, parser, reporterType) {
    this.fileReader = fileReader;
    this.parser = parser;
    this.reporterType = FormatterFactoryTest.createFormatter(reporterType);
  }

  process(caminho) {
    const data = this.fileReader.read(caminho);
    const cidades = this.parser.parse(data);
    return this.reporterType.output(cidades);
  }
}

export default ReportProcessorTest;