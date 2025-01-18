import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const codespanConverter: ConverterFunc<MarkdownElement.CodeSpan> = (
  styles: Theme,
  text: string,
) => {
  return `<code style="${makeStyleText(
    styles[MarkdownElement.CodeSpan],
  )}">${text}</code>`;
};

export const codespanConverterFactory = (styles: Theme) => {
  return (text: string) => codespanConverter(styles, text);
};
