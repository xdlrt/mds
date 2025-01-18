import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const emConverter: ConverterFunc<MarkdownElement.EM> = (
  styles: Theme,
  text: string,
) => {
  return `<em class="em" style="${makeStyleText(
    styles[MarkdownElement.EM],
  )}">${text}</em>`;
};

export const emConverterFactory = (styles: Theme) => {
  return (text: string) => emConverter(styles, text);
};
