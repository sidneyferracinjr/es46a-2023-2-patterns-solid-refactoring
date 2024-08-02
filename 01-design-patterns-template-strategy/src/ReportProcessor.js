export default class ReportProcessor {
    constructor(fileReader, parser, reporter) {
      this.fileReader = fileReader;
      this.parser = parser;
      this.reporter = reporter;
    }
  
    process(caminho) {
      const data = this.fileReader.read(caminho);
      const cidades = this.parser.parse(data);
      return this.reporter.report(cidades);
    }
  }
  