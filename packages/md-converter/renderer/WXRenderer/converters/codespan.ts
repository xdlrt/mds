import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const CodeSpanConverter: ConverterFunc<MarkdownElement.CodeSpan> = (
  styles: Theme,
  text: string,
) => {
  return `<code style="${makeStyleText(styles.codeSpan)}">${text}</code>`;
};

export const CodeSpanConverterFactory = (styles: Theme) => {
  return (text: string) => CodeSpanConverter(styles, text);
};
