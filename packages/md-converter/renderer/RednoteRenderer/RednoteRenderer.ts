import { Renderer } from "marked";
import { BaseRenderer } from "../BaseRenderer";
import { codeConverterFactory } from "./converters/code";
import { codespanConverterFactory } from "./converters/codespan";
import { emConverterFactory } from "./converters/em";
import { headingConverterFactory } from "./converters/heading";
import { hrConverterFactory } from "./converters/hr";
import { linkConverterFactory } from "./converters/link";
import { listConverterFactory } from "./converters/list";
import { listItemConverterFactory } from "./converters/listItem";
import { paragraphConverterFactory } from "./converters/paragraph";
import { strongConverterFactory } from "./converters";

export class RednoteRenderer extends BaseRenderer {
  assemble(): Partial<Renderer> {
    return {
      em: emConverterFactory(this.theme),
      heading: headingConverterFactory(this.theme),
      hr: hrConverterFactory(this.theme),
      link: linkConverterFactory(this.theme, {}),
      list: listConverterFactory(this.theme),
      listitem: listItemConverterFactory(this.theme),
      paragraph: paragraphConverterFactory(this.theme),
      code: codeConverterFactory(this.theme),
      codespan: codespanConverterFactory(this.theme),
      strong: strongConverterFactory(this.theme),
    };
  }
}
