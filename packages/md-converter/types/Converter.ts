// https://marked.js.org/using_pro#renderer
import { MarkdownElement } from ".";

export interface ConverterMap {
  [MarkdownElement.Heading]: (text: string, level: number) => string;
  [MarkdownElement.Paragraph]: (text: string) => string;
  [MarkdownElement.Quote]: (text: string) => string;
  [MarkdownElement.List]: (
    body: string,
    ordered: boolean,
    start: number
  ) => string;
  [MarkdownElement.ListItem]: (
    text: string,
    task: boolean,
    checked: boolean
  ) => string;
  [MarkdownElement.Link]: (href: string, title: string, text: string) => string;
  [MarkdownElement.HR]: () => string;
  [MarkdownElement.Strong]: (text: string) => string;
  [MarkdownElement.EM]: (text: string) => string;
}

export type ConverterType = keyof ConverterMap;

export type ConverterFunc<T extends ConverterType> = ConverterMap[T];
