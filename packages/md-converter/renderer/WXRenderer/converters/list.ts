import { ConverterFunc } from "../../../ConverterMgr";
import { MarkdownElement } from "../../../types";

export const listConverter: ConverterFunc<MarkdownElement.List> = (
  body: string,
  ordered: boolean
) => {
  body = body.replace(/<\/*p.*?>/g, "");
  let segments = body.split(`<%s/>`);
  if (!ordered) {
    body = segments.join("• ");
    return `<ul>${body}</ul>`;
  }
  body = segments[0];
  for (let i = 1; i < segments.length; i++) {
    body = body + i + ". " + segments[i];
  }
  return `<ol>${body}</ol>`;
};
