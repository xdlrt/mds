// https://marked.js.org/using_pro#renderer
import { MarkdownElement } from ".";
import { Theme } from "../themes";

export interface LinkConverterOptions {
  addFootNote?: (title: string, href: string) => number;
  enableFootNote?: boolean;
}

export interface ConverterMap {
  [MarkdownElement.Heading]: (
    styles: Theme,
    text: string,
    level: number
  ) => string;
  [MarkdownElement.Paragraph]: (styles: Theme, text: string) => string;
  [MarkdownElement.Quote]: (styles: Theme, text: string) => string;
  [MarkdownElement.List]: (
    styles: Theme,
    body: string,
    ordered: boolean,
    start: number
  ) => string;
  [MarkdownElement.ListItem]: (
    styles: Theme,
    text: string,
    task: boolean,
    checked: boolean
  ) => string;
  [MarkdownElement.Link]: (
    styles: Theme,
    options: LinkConverterOptions,
    href: string,
    title: string,
    text: string
  ) => string;
  [MarkdownElement.HR]: (styles: Theme) => string;
  [MarkdownElement.Strong]: (styles: Theme, text: string) => string;
  [MarkdownElement.EM]: (styles: Theme, text: string) => string;
}

export type ConverterType = keyof ConverterMap;

export type ConverterFunc<T extends ConverterType> = ConverterMap[T];
