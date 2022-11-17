import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const HRConverter: ConverterFunc<MarkdownElement.HR> = (
  styles: Theme["hr"]
) => {
  return `<hr style="${makeStyleText(styles)}" />`;
};

export const HRConverterFactory = (styles: Theme["hr"]) => {
  return () => HRConverter(styles);
};
