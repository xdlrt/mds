import { Theme } from "../../../themes";
import { MarkdownElement, ConverterFunc } from "../../../types";
import { makeStyleText } from "../../../utils";

export const headingConverter: ConverterFunc<MarkdownElement.Heading> = (
  styles: Theme,
  text: string,
  level: number,
) => {
  switch (level) {
    case 1:
      return `<h1 style="${makeStyleText(styles.heading.h1)}">${text}</h1>`;
    case 2:
      return `<h2 style="${makeStyleText(styles.heading.h2)}">${text}</h2>`;
    case 3:
      return `<h3 style="${makeStyleText(styles.heading.h3)}">${text}</h3>`;
    default:
      return `<h4 style="${makeStyleText(styles.heading.h4)}">${text}</h4>`;
  }
};

export const headingConverterFactory = (styles: Theme) => {
  return (text: string, level: number) => headingConverter(styles, text, level);
};
