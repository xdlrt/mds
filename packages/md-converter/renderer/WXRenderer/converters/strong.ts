import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const strongConverter: ConverterFunc<MarkdownElement.Strong> = (
  styles: Theme,
  text: string
) => {
  return `<strong style="${makeStyleText(styles.strong)}">${text}</strong>`;
};

export const strongConverterFactory = (styles: Theme) => {
  return (text: string) => strongConverter(styles, text);
};
