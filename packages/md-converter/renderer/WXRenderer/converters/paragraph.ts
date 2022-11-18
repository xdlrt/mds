import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const paragraphConverter: ConverterFunc<MarkdownElement.Paragraph> = (
  styles: Theme["paragraph"],
  text: string
) => {
  if (text.indexOf("<figure") != -1 && text.indexOf("<img") != -1) {
    return text;
  }
  return text.trim() ? `<p style="${makeStyleText(styles)}">${text}</p>` : "";
};

export const paragraphConverterFactory = (styles: Theme["paragraph"]) => {
  return (text: string) => paragraphConverter(styles, text);
};
