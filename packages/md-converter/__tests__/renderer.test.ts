import { describe, test, expect } from "vitest";
import { marked } from "marked";
import { BaseRenderer } from "../renderer/BaseRenderer";
import { WXRenderer } from "../renderer/WXRenderer";
import { defaultTheme } from "../themes";

describe("BaseRenderer check with default theme", () => {
  const renderer = new BaseRenderer({ theme: defaultTheme });

  test("setTheme", () => {
    renderer.setTheme({ ...defaultTheme, hr: { test: "xxx" } });
    renderer.theme.hr.test = "xxx";
  });

  test("assemble", () => {
    try {
      renderer.assemble();
      expect(false).toEqual(true);
    } catch (error) {
      expect(false).toEqual(false);
    }
  });
});

describe("WXRenderer check with default theme", () => {
  const renderer = new WXRenderer({ theme: defaultTheme });
  const output = renderer.assemble();
  marked.use({ renderer: output });

  test("valid converter number", () => {
    expect(Object.keys(output).length).toEqual(10);
  });

  test("em", () => {
    const text = marked.parse("*xxx*");
    expect(text).toMatch("<span");
    expect(text).toMatch("xxx");
    expect(text).toMatch("</span>");
  });

  test("h1", () => {
    const text = marked.parse("# heading1");
    expect(text).toMatch("<h1");
    expect(text).toMatch("heading1");
    expect(text).toMatch("</h1>");
  });

  test("h2", () => {
    const text = marked.parse("## heading2");
    expect(text).toMatch("<h2");
    expect(text).toMatch("heading2");
    expect(text).toMatch("</h2>");
  });

  test("h3", () => {
    const text = marked.parse("### heading3");
    expect(text).toMatch("<h3");
    expect(text).toMatch("heading3");
    expect(text).toMatch("</h3>");
  });

  test("h4", () => {
    const text = marked.parse("#### heading4");
    expect(text).toMatch("<h4");
    expect(text).toMatch("heading4");
    expect(text).toMatch("</h4>");
  });

  test("hr", () => {
    const text = marked.parse("---");
    expect(text).toMatch("<hr");
  });

  test("link", () => {
    const renderer = new WXRenderer({ theme: defaultTheme });
    const output = renderer.assemble();
    marked.use({ renderer: output });

    const weixinLink = marked.parse(
      "[一颗小树 #27 找到并坚持自己的热爱](https://mp.weixin.qq.com/s/-tF20PdAdMuqXakuBt7_wQ)",
    );
    expect(weixinLink).toMatch("<a");
    expect(weixinLink).toMatch("</a>");
    expect(weixinLink).toMatch("title");
    expect(weixinLink).toMatch("一颗小树 #27 找到并坚持自己的热爱");
    expect(weixinLink).toMatch(
      "https://mp.weixin.qq.com/s/-tF20PdAdMuqXakuBt7_wQ",
    );
    expect(renderer.buildSuffix()).toEqual("");

    const weixinLink2 = marked.parse(
      "[一颗小树 #27 找到并坚持自己的热爱](http://mp.weixin.qq.com/s/-tF20PdAdMuqXakuBt7_wQ)",
    );
    expect(weixinLink2).toMatch(
      "http://mp.weixin.qq.com/s/-tF20PdAdMuqXakuBt7_wQ",
    );

    const link = marked.parse(
      "[一颗小树 - 竹白](https://xiaoshu.zhubai.love)xxx[一颗小树 - 竹白](https://xiaoshu.zhubai.love)",
    );
    expect(link).toMatch("<span");
    expect(link).toMatch("</span>");
    expect(link).toMatch("<sup>");
    expect(link).toMatch("</sup>");
    expect(link).toMatch("一颗小树 - 竹白");
    expect(renderer.buildSuffix()).toMatch("<h4");
    expect(renderer.buildSuffix()).toMatch("<p");
    expect(renderer.buildSuffix()).toMatch("\n");
    expect(renderer.buildSuffix()).toMatch("<code");
    expect(renderer.buildSuffix()).toMatch("<i>");
    expect(renderer.buildSuffix()).toMatch("<br/>");
  });

  test("list - ordered", () => {
    const text = marked.parse("1. xxx\n\n2. yyy\n\n3. zzz");
    expect(text).toMatch("<ol");
    expect(text).toMatch("</ol>");
    expect(text).toMatch("</li>");
    expect(text).toMatch("xxx");
    expect(text).toMatch("yyy");
    expect(text).toMatch("zzz");
  });

  test("listItem", () => {
    const text = marked.parse("- xxx\n\n- yyy\n\n- zzz");
    expect(text).toMatch("<ul");
    expect(text).toMatch("</ul>");
    expect(text).toMatch("</li>");
    expect(text).toMatch("xxx");
    expect(text).toMatch("yyy");
    expect(text).toMatch("zzz");
  });

  test("paragraph", () => {
    const text = marked.parse("xxxyyyzzz");
    expect(text).toMatch("<p");
    expect(text).toMatch("</p>");
  });

  test("quote", () => {
    const text = marked.parse("> xxx");
    expect(text).toMatch("<blockquote");
    expect(text).toMatch("</blockquote>");
    expect(text).toMatch("<p");
    expect(text).toMatch("</p>");
    expect(text).toMatch("xxx");
  });

  test("strong", () => {
    const text = marked.parse("**xxx**");
    expect(text).toMatch("<p");
    expect(text).toMatch("</p>");
    expect(text).toMatch("<strong");
    expect(text).toMatch("</strong>");
    expect(text).toMatch("xxx");
  });
});
