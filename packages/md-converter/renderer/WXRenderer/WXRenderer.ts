import { ConverterMgr } from "../../ConverterMgr";
import { MarkdownElement } from "../../types";
import { BaseRenderer } from "../BaseRenderer";
import {
  EMConverter,
  headingConverter,
  HRConverter,
  linkConverter,
  listConverter,
  listItemConverter,
  paragraphConverter,
  quoteConverter,
  strongConverter,
} from "./converters";

function createConverterManager() {
  const converterMgr = new ConverterMgr();
  converterMgr.register(MarkdownElement.EM, EMConverter);
  converterMgr.register(MarkdownElement.Heading, headingConverter);
  converterMgr.register(MarkdownElement.HR, HRConverter);
  converterMgr.register(MarkdownElement.Link, linkConverter);
  converterMgr.register(MarkdownElement.List, listConverter);
  converterMgr.register(MarkdownElement.ListItem, listItemConverter);
  converterMgr.register(MarkdownElement.Paragraph, paragraphConverter);
  converterMgr.register(MarkdownElement.Quote, quoteConverter);
  converterMgr.register(MarkdownElement.Strong, strongConverter);
  return converterMgr;
}

export class WXRenderer extends BaseRenderer {
  constructor() {
    const converterMgr = createConverterManager();
    super({ converterMgr });
  }
}
