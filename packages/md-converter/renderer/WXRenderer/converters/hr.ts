import { MarkdownElement, ConverterFunc } from "../../../types";

export const HRConverter: ConverterFunc<MarkdownElement.HR> = () => {
  return `<hr />`;
};
