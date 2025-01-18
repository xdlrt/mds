import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const listConverter: ConverterFunc<MarkdownElement.List> = (
  styles: Theme,
  body: string,
  ordered: boolean,
  start: number,
) => {
  const tag = ordered ? "ol" : "ul";
  const startAttr = ordered && start !== 1 ? ` start="${start}"` : "";
  return `<${tag} class="list"${startAttr} style="${makeStyleText(
    styles[MarkdownElement.List][tag],
  )}">${body}</${tag}>`;
};

export const listConverterFactory = (styles: Theme) => {
  return (body: string, ordered: boolean, start: number) =>
    listConverter(styles, body, ordered, start);
};
