import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const HRConverter: ConverterFunc<MarkdownElement.HR> = (
  styles: Theme
) => {
  return `<hr style="${makeStyleText(styles.hr)}" />`;
};

export const HRConverterFactory = (styles: Theme) => {
  return () => HRConverter(styles);
};
