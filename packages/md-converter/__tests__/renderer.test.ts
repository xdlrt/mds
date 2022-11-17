import { marked } from "marked";
import { WXRenderer } from "../renderer/WXRenderer";

describe("WXRenderer check", () => {
  test("valid converter number", () => {
    const renderer = new WXRenderer();
    const output = renderer.assemble();
    expect(Object.keys(output).length).toEqual(9);
  });

  test("heading content", () => {
    const renderer = new WXRenderer();
    const output = renderer.assemble();
    marked.use({ renderer: output });
    const text = marked.parse(
      "# heading1\n\n## heading2\n\n### heading3\n\n#### heading4"
    );
    expect(text).toEqual(
      "<h1>heading1</h1><h2>heading2</h2><h3>heading3</h3><h4>heading4</h4>"
    );
  });
});
