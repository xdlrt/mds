import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const quoteConverter: ConverterFunc<MarkdownElement.Quote> = (
  styles: Theme["quote"],
  text: string
) => {
  text = text.replace(/<p.*?>/g, `<p>`);
  return `<blockquote style="${makeStyleText(styles)}">${text}</blockquote>`;
};

export const quoteConverterFactory = (styles: Theme["quote"]) => {
  return (text: string) => quoteConverter(styles, text);
};
