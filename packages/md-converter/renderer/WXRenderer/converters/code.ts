import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const codeConverter: ConverterFunc<MarkdownElement.Code> = (
  styles: Theme,
  text: string,
  lang: string,
) => {
  lang = hljs.getLanguage(lang) ? lang : "plaintext";

  text = hljs.highlight(text, { language: lang }).value;

  text = text
    .replace(/\r\n/g, "<br/>")
    .replace(/\n/g, "<br/>")
    .replace(/(>[^<]+)|(^[^<]+)/g, (str) => {
      return str.replace(/\s/g, "&nbsp;");
    });

  return `<pre class="hljs code__pre" style="${makeStyleText(
    styles.code.pre,
  )}"><code class="prettyprint language-${lang}" style="${makeStyleText(
    styles.code.code,
  )}">${text}</code></pre>`;
};

export const codeConverterFactory = (styles: Theme) => {
  return (text: string, lang: string) => codeConverter(styles, text, lang);
};
