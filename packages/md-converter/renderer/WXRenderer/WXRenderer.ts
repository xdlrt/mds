import { Renderer } from "marked";
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

export class WXRenderer extends BaseRenderer {
  assemble(): Partial<Renderer> {
    return {
      em: EMConverter,
      heading: headingConverter,
      hr: HRConverter,
      link: linkConverter,
      list: listConverter,
      listitem: listItemConverter,
      paragraph: paragraphConverter,
      blockquote: quoteConverter,
      strong: strongConverter,
    };
  }
}
