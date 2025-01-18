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
  // Split on li tags and filter out empty strings
  let segments = body.split(/<\/?li[^>]*>/g).filter((s) => s.trim());
  if (!ordered) {
    // Wrap each segment in li tags
    body = segments
      .map(
        (s) =>
          `<li style="${makeStyleText(
            styles[MarkdownElement.ListItem],
          )}"><span style="font-size: 20px;${makeStyleText(styles[MarkdownElement.ListItemSymbol])}">•</span>${s}</li>`,
      )
      .join("");
    return `<ul style="${makeStyleText(styles[MarkdownElement.List].ul)}">${body}</ul>`;
  }
  body = segments
    .map(
      (s, i) =>
        `<li style="${makeStyleText(
          styles[MarkdownElement.ListItem],
        )}"><span style="${makeStyleText(styles[MarkdownElement.ListItemSymbol])}">${i + 1}.</span>${s}</li>`,
    )
    .join("");
  return `<ol style="${makeStyleText(styles[MarkdownElement.List].ol)}">${body}</ol>`;
};

export const listConverterFactory = (styles: Theme) => {
  return (body: string, ordered: boolean, start: number) =>
    listConverter(styles, body, ordered, start);
};
