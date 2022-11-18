import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const quoteConverter: ConverterFunc<MarkdownElement.Quote> = (
  styles: Theme,
  text: string
) => {
  text = text.replace(
    /<p.*?>/g,
    `<p style="${makeStyleText(styles.blockquoteParagraph)}">`
  );
  return `<blockquote style="${makeStyleText(
    styles.quote
  )}">${text}</blockquote>`;
};

export const quoteConverterFactory = (styles: Theme) => {
  return (text: string) => quoteConverter(styles, text);
};
