import FormatterFactory from '../factories/FormatterFactory.js';

class ReportProcessor {
  constructor(fileReader, parser, reporterType) {
    this.fileReader = fileReader;
    this.parser = parser;
    this.reporterType = FormatterFactory.createFormatter(reporterType);
  }

  process(caminho) {
    const data = this.fileReader.read(caminho);
    const cidades = this.parser.parse(data);
    return this.reporterType.output(cidades);
  }
}

export default ReportProcessor;