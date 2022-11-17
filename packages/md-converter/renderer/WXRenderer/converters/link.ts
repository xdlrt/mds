import { MarkdownElement, ConverterFunc } from "../../../types";

export const linkConverter: ConverterFunc<MarkdownElement.Link> = (
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
  return `<span>${text}</span>`;
};
