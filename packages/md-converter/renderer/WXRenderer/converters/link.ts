import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const linkConverter: ConverterFunc<MarkdownElement.Link> = (
  styles: Theme["link"],
  href: string,
  title: string,
  text: string
) => {
  if (href.startsWith("https://mp.weixin.qq.com")) {
    return `<a href="${href}" title="${title || text}">${text}</a>`;
  }
  if (href === text) {
    return text;
  }
  return `<span styles="${makeStyleText(styles)}">${text}</span>`;
};

export const linkConverterFactory = (styles: Theme["link"]) => {
  return (href: string, title: string, text: string) =>
    linkConverter(styles, href, title, text);
};
