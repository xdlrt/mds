import { Theme } from "../../../themes";
import {
  MarkdownElement,
  ConverterFunc,
  LinkConverterOptions,
} from "../../../types";
import { makeStyleText } from "../../../utils";

export const linkConverter: ConverterFunc<MarkdownElement.Link> = (
  styles: Theme,
  options: LinkConverterOptions,
  href: string,
  title: string,
  text: string,
) => {
  const titleAttr = title ? ` title="${title}"` : "";
  return `<a class="link" href="${href}"${titleAttr} style="${makeStyleText(
    styles[MarkdownElement.Link],
  )}">${text}</a>`;
};

export const linkConverterFactory = (
  styles: Theme,
  options: LinkConverterOptions,
) => {
  return (href: string, title: string, text: string) =>
    linkConverter(styles, options, href, title, text);
};
