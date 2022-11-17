import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const EMConverter: ConverterFunc<MarkdownElement.EM> = (
  styles: Theme["em"],
  text: string
) => {
  return `<span style="${makeStyleText(styles)}">${text}</span>`;
};

export const EMConverterFactory = (styles: Theme["em"]) => {
  return (text: string) => EMConverter(styles, text);
};
