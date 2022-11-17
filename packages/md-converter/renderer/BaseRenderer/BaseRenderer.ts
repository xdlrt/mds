import { ConverterMgr } from "../../ConverterMgr";
import { Renderer } from "marked";
import { MarkdownElement } from "../../types";

export interface BaseRendererOptions {
  converterMgr: ConverterMgr;
}

export class BaseRenderer {
  converterMgr: ConverterMgr;

  constructor(options: BaseRendererOptions) {
    this.converterMgr = options.converterMgr;
  }

  assemble(): Partial<Renderer> {
    return {
      heading: this.converterMgr.getConverter(MarkdownElement.Heading),
    };
  }
}
