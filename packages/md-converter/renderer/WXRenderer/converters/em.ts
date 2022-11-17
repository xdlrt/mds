import { ConverterFunc } from "../../../ConverterMgr";
import { MarkdownElement } from "../../../types";

export const EMConverter: ConverterFunc<MarkdownElement.EM> = (
  text: string
) => {
  return `<span style="font-style: italic;">${text}</span>`;
};
