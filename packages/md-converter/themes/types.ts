import { MarkdownElement } from "../types";

export type styleObject = {
  [key: string]: string;
};

export interface Theme {
  common: styleObject;
  [MarkdownElement.Heading]: {
    h1: styleObject;
    h2: styleObject;
    h3: styleObject;
    h4: styleObject;
  };
  [MarkdownElement.Paragraph]: styleObject;
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
}
