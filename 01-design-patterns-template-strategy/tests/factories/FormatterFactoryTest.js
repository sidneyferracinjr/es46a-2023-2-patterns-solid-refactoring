import FormatterHTML from "../formatters/FormatterHTMLTest.js";
import FormatterTXT from "../formatters/FormatterTXTTest.js";

export default class FormatterFactoryTest {
  static testCreateFormatter() {
    const formatterHTML = FormatterFactory.createFormatter("html");
    console.log(formatterHTML instanceof FormatterHTML); // true

    const formatterTXT = FormatterFactory.createFormatter("txt");
    console.log(formatterTXT instanceof FormatterTXT); // true

    try {
      const formatterUnknown = FormatterFactory.createFormatter("unknown");
      console.log(formatterUnknown);
    } catch (error) {
      console.log(error.message); // "Formato Desconhecido."
    }
  }
}