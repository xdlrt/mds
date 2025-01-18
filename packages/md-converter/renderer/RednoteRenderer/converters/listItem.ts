import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const listItemConverter: ConverterFunc<MarkdownElement.ListItem> = (
  styles: Theme,
  text: string,
  task: boolean,
  checked: boolean,
) => {
  let checkbox = "";
  if (task) {
    checkbox = `<input type="checkbox" ${checked ? "checked" : ""} disabled /> `;
  }
  console.log(this);
  return `<li style="${makeStyleText(
    styles[MarkdownElement.ListItem],
  )}">${checkbox}${text}</li>`;
};

export const listItemConverterFactory = (styles: Theme) => {
  return (text: string, task: boolean, checked: boolean) =>
    listItemConverter(styles, text, task, checked);
};
