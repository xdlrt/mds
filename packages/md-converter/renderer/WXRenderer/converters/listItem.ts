import { ConverterFunc } from "../../../ConverterMgr";
import { MarkdownElement } from "../../../types";

export const listItemConverter: ConverterFunc<MarkdownElement.ListItem> = (
  text: string
) => {
  return `<li>${text}</li>`;
};
