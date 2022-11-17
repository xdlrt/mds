import { marked } from "marked";
import { WXRenderer } from "../renderer/WXRenderer";
import { defaultTheme } from "../themes";

describe("WXRenderer check with default theme", () => {
  test("valid converter number", () => {
    const renderer = new WXRenderer({ theme: defaultTheme });
    const output = renderer.assemble();
    expect(Object.keys(output).length).toEqual(9);
  });

  test("heading", () => {
    const renderer = new WXRenderer({ theme: defaultTheme });
    const output = renderer.assemble();
    marked.use({ renderer: output });
    const text = marked.parse(
      "# heading1\n\n## heading2\n\n### heading3\n\n#### heading4"
    );
    expect(text).toEqual(
      "<h1 style=\"font-size:1.2em;text-align:center;font-weight:bold;display:table;margin:2em auto 1em;padding:0 1em;border-bottom:2px solid rgba(0, 152, 116, 0.9);color:#3f3f3f\">heading1</h1><h2 style=\"font-size:1.2em;text-align:left;font-weight:bold;margin:2em auto 1em;padding:0 0.2em;color:#3f3f3f\">heading2</h2><h3 style=\"font-weight:bold;font-size:1.1em;margin:1.5em 8px 0.75em 0;line-height:1.2;padding-left:8px;border-left:3px solid rgba(0, 152, 116, 0.9);color:#3f3f3f\">heading3</h3><h4 style=\"font-weight:bold;font-size:1em;margin:1em 8px 0.5em;color:rgba(66, 185, 131, 0.9)\">heading4</h4>"
    );
  });
});
