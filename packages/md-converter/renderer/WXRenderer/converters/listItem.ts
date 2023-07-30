import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const listItemConverter: ConverterFunc<MarkdownElement.ListItem> = (
  styles: Theme,
  text: string,
) => {
  return `<li style="${makeStyleText(styles.listItem)}">${text}</li>`;
};

export const listItemConverterFactory = (styles: Theme) => {
  return (text: string, task: boolean, checked: boolean) =>
    listItemConverter(styles, text, task, checked);
};
