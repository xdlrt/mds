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
      em: EMConverterFactory({ ...this.theme.common, ...this.theme.em }),
      heading: headingConverterFactory({
        ...this.theme.common,
        ...this.theme.heading,
      }),
      hr: HRConverterFactory(this.theme.hr),
      link: linkConverterFactory({ ...this.theme.common, ...this.theme.link }),
      list: listConverterFactory({ ...this.theme.common, ...this.theme.list }),
      listitem: listItemConverterFactory({
        ...this.theme.common,
        ...this.theme.listItem,
      }),
      paragraph: paragraphConverterFactory({
        ...this.theme.common,
        ...this.theme.paragraph,
      }),
      blockquote: quoteConverterFactory({
        ...this.theme.common,
        ...this.theme.quote,
      }),
      strong: strongConverterFactory({
        ...this.theme.common,
        ...this.theme.strong,
      }),
    };
  }
}
