import { Renderer } from "marked";
import { BaseRenderer } from "../BaseRenderer";
import {
  EMConverterFactory,
  headingConverterFactory,
  HRConverterFactory,
  linkConverterFactory,
  listConverterFactory,
  listItemConverterFactory,
  paragraphConverterFactory,
  quoteConverterFactory,
  strongConverterFactory,
} from "./converters";

export class WXRenderer extends BaseRenderer {
  assemble(): Partial<Renderer> {
    return {
      em: EMConverterFactory(this.theme),
      heading: headingConverterFactory(this.theme),
      hr: HRConverterFactory(this.theme),
      link: linkConverterFactory(this.theme),
      list: listConverterFactory(this.theme),
      listitem: listItemConverterFactory(this.theme),
      paragraph: paragraphConverterFactory(this.theme),
      blockquote: quoteConverterFactory(this.theme),
      strong: strongConverterFactory(this.theme),
    };
  }
}
