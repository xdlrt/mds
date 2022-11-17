// https://marked.js.org/using_pro#renderer
import { MarkdownElement } from ".";
import { Theme } from "../themes";

export interface ConverterMap {
  [MarkdownElement.Heading]: (
    styles: Theme[MarkdownElement.Heading],
    text: string,
    level: number
  ) => string;
  [MarkdownElement.Paragraph]: (
    styles: Theme[MarkdownElement.Paragraph],
    text: string
  ) => string;
  [MarkdownElement.Quote]: (
    styles: Theme[MarkdownElement.Quote],
    text: string
  ) => string;
  [MarkdownElement.List]: (
    styles: Theme[MarkdownElement.List],
    body: string,
    ordered: boolean,
    start: number
  ) => string;
  [MarkdownElement.ListItem]: (
    styles: Theme[MarkdownElement.ListItem],
    text: string,
    task: boolean,
    checked: boolean
  ) => string;
  [MarkdownElement.Link]: (
    styles: Theme[MarkdownElement.Link],
    href: string,
    title: string,
    text: string
  ) => string;
  [MarkdownElement.HR]: (styles: Theme[MarkdownElement.HR]) => string;
  [MarkdownElement.Strong]: (
    styles: Theme[MarkdownElement.Strong],
    text: string
  ) => string;
  [MarkdownElement.EM]: (
    styles: Theme[MarkdownElement.EM],
    text: string
  ) => string;
}

export type ConverterType = keyof ConverterMap;

export type ConverterFunc<T extends ConverterType> = ConverterMap[T];
