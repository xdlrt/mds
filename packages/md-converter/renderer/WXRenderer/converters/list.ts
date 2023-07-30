import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const listConverter: ConverterFunc<MarkdownElement.List> = (
  styles: Theme,
  body: string,
  ordered: boolean,
  _start: number,
) => {
  body = body.replace(/<\/*p.*?>/g, "");
  let segments = body.split(`<%s/>`);
  if (!ordered) {
    body = segments.join("• ");
    return `<ul style="${makeStyleText(styles.list.ul)}">${body}</ul>`;
  }
  body = segments[0];
  for (let i = 1; i < segments.length; i++) {
    body = body + i + ". " + segments[i];
  }
  return `<ol style="${makeStyleText(styles.list.ol)}">${body}</ol>`;
};

export const listConverterFactory = (styles: Theme) => {
  return (body: string, ordered: boolean, start: number) =>
    listConverter(styles, body, ordered, start);
};
