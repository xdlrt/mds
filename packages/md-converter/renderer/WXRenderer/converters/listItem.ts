import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const listItemConverter: ConverterFunc<MarkdownElement.ListItem> = (
  styles: Theme["listItem"],
  text: string
) => {
  return `<li styles="${makeStyleText(styles)}">${text}</li>`;
};

export const listItemConverterFactory = (styles: Theme["listItem"]) => {
  return (text: string, task: boolean, checked: boolean) =>
    listItemConverter(styles, text, task, checked);
};
