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
  if (href.includes("mp.weixin.qq.com")) {
    return `<a href="${href}" title="${title || text}" style="${makeStyleText(
      styles.link,
    )}">${text}</a>`;
  }
  if (href === text) {
    return text;
  }
  const { enableFootNote, addFootNote } = options;
  if (enableFootNote && addFootNote) {
    let index = addFootNote(title || text, href);
    return `<span style="${makeStyleText(
      styles.link,
    )}">${text}<sup>[${index}]</sup></span>`;
  }
  return `<span style="${makeStyleText(styles.link)}">${text}</span>`;
};

export const linkConverterFactory = (
  styles: Theme,
  options: LinkConverterOptions,
) => {
  return (href: string, title: string, text: string) =>
    linkConverter(styles, options, href, title, text);
};
