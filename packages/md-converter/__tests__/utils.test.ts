import { describe, test, expect } from "vitest";
import { makeStyleText } from "../utils";

describe("utils - styles", () => {
  test("makeStyleText", () => {
    // @ts-ignore
    expect(makeStyleText()).toEqual("");
    expect(makeStyleText({})).toEqual("");
    expect(
      makeStyleText({
        "font-style": "italic",
        "font-size": `15px`,
        "line-height": `1.75`,
      }),
    ).toEqual("font-style:italic;font-size:15px;line-height:1.75");
  });
});
