import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const paragraphConverter: ConverterFunc<MarkdownElement.Paragraph> = (
  styles: Theme,
  text: string,
) => {
  return `<p style="${makeStyleText(
    styles[MarkdownElement.Paragraph],
  )}">${text}</p>`;
};

export const paragraphConverterFactory = (styles: Theme) => {
  return (text: string) => paragraphConverter(styles, text);
};
