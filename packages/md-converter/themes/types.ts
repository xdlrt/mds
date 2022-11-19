import { MarkdownElement } from "../types";

export type styleObject = {
  [key: string]: string;
};

export interface Theme {
  [MarkdownElement.Heading]: {
    h1: styleObject;
    h2: styleObject;
    h3: styleObject;
    h4: styleObject;
  };
  [MarkdownElement.Paragraph]: styleObject;
  [MarkdownElement.BlockquoteParagraph]: styleObject;
  [MarkdownElement.Quote]: styleObject;
  [MarkdownElement.List]: {
    ol: styleObject;
    ul: styleObject;
  };
  [MarkdownElement.ListItem]: styleObject;
  [MarkdownElement.Link]: styleObject;
  [MarkdownElement.Strong]: styleObject;
  [MarkdownElement.HR]: styleObject;
  [MarkdownElement.EM]: styleObject;
  [MarkdownElement.FootNotes]: styleObject;
  [MarkdownElement.Code]: {
    pre: styleObject;
    code: styleObject;
  };
  [MarkdownElement.CodeSpan]: styleObject;
}
