import { ConverterFunc } from "../../../ConverterMgr";
import { MarkdownElement } from "../../../types";

export const strongConverter: ConverterFunc<MarkdownElement.Strong> = (
  text: string
) => {
  return `<strong>${text}</strong>`;
};
