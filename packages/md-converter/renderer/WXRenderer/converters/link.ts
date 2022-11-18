import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const linkConverter: ConverterFunc<MarkdownElement.Link> = (
  styles: Theme,
  href: string,
  title: string,
  text: string
) => {
  if (href.startsWith("https://mp.weixin.qq.com")) {
    return `<a href="${href}" title="${title || text}" style="${makeStyleText(
      styles.link
    )}">${text}</a>`;
  }
  if (href === text) {
    return text;
  }
  return `<span style="${makeStyleText(styles.link)}">${text}</span>`;
};

export const linkConverterFactory = (styles: Theme) => {
  return (href: string, title: string, text: string) =>
    linkConverter(styles, href, title, text);
};
