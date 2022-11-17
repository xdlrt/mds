import { MarkdownElement, ConverterFunc } from "../../../types";

export const listItemConverter: ConverterFunc<MarkdownElement.ListItem> = (
  text: string
) => {
  return `<li>${text}</li>`;
};
