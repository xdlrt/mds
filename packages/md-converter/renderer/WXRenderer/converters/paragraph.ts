import { ConverterFunc } from "../../../ConverterMgr";
import { MarkdownElement } from "../../../types";

export const paragraphConverter: ConverterFunc<MarkdownElement.Paragraph> = (
  text: string
) => {
  if (text.indexOf("<figure") != -1 && text.indexOf("<img") != -1) {
    return text;
  }
  return text.trim() ? "" : `<p>${text}</p>`;
};
