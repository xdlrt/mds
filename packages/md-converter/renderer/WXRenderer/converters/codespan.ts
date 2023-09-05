import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const codeSpanConverter: ConverterFunc<MarkdownElement.CodeSpan> = (
  styles: Theme,
  text: string,
) => {
  return `<code style="${makeStyleText(styles.codeSpan)}">${text}</code>`;
};

export const codeSpanConverterFactory = (styles: Theme) => {
  return (text: string) => codeSpanConverter(styles, text);
};
