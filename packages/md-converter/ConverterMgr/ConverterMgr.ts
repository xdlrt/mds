import { MarkdownElement } from "../types";
import { Converter } from "./types";

export class ConverterMgr {
  private converters: Map<MarkdownElement, Converter> = new Map();

  register(type: MarkdownElement, converter: Converter) {
    if (this.converters.has(type)) return;
    this.converters.set(type, converter);
  }

  getConverter(type: MarkdownElement) {
    return this.converters.get(type);
  }
}
