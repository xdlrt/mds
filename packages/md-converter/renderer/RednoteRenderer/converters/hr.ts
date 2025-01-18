import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";

export const hrConverter: ConverterFunc<MarkdownElement.HR> = (
  styles: Theme,
) => {
  return `<hr />`;
};

export const hrConverterFactory = (styles: Theme) => {
  return () => hrConverter(styles);
};
