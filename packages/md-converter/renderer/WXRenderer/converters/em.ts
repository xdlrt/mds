import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const EMConverter: ConverterFunc<MarkdownElement.EM> = (
  styles: Theme,
  text: string,
) => {
  return `<span style="${makeStyleText(styles.em)}">${text}</span>`;
};

export const EMConverterFactory = (styles: Theme) => {
  return (text: string) => EMConverter(styles, text);
};
