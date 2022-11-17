import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const strongConverter: ConverterFunc<MarkdownElement.Strong> = (
  styles: Theme["strong"],
  text: string
) => {
  return `<strong style="${makeStyleText(styles)}">${text}</strong>`;
};

export const strongConverterFactory = (styles: Theme["strong"]) => {
  return (text: string) => strongConverter(styles, text);
};
