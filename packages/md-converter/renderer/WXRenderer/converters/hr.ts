import { ConverterFunc } from "../../../ConverterMgr";
import { MarkdownElement } from "../../../types";

export const HRConverter: ConverterFunc<MarkdownElement.HR> = () => {
  return `<hr />`;
};
