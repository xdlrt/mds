import { ConverterFunc } from "../../../ConverterMgr";
import { MarkdownElement } from "../../../types";

export const quoteConverter: ConverterFunc<MarkdownElement.Quote> = (
  text: string
) => {
  text = text.replace(/<p.*?>/g, `<p>`);
  return `<blockquote>${text}</blockquote>`;
};
