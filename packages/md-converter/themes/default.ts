import { Theme } from "./types";

export const defaultTheme: Theme = {
  heading: {
    // 一级标题样式
    h1: {
      "font-size": `1.2em`,
      "text-align": `center`,
      "font-weight": `bold`,
      display: `table`,
      margin: `2em auto 1em`,
      padding: `0 1em`,
      "border-bottom": `2px solid rgba(250, 81, 81, 1)`,
      color: `rgba(250, 81, 81, 1)`,
    },
    // 二级标题样式
    h2: {
      "font-size": `1.2em`,
      "text-align": `left`,
      "font-weight": `bold`,
      margin: `2em auto 1em`,
      padding: `0 0.2em`,
      color: `rgba(250, 81, 81, 1)`,
    },
    // 三级标题样式
    h3: {
      "font-weight": `bold`,
      "font-size": `1.1em`,
      margin: `1.5em 8px 0.75em`,
      "line-height": `1.2`,
      "padding-left": `8px`,
      "border-left": `3px solid rgba(250, 81, 81, 1)`,
      color: `rgba(250, 81, 81, 1)`,
    },
    // 四级标题样式
    h4: {
      "font-weight": `bold`,
      "font-size": `1em`,
      "text-align": `left`,
      margin: `1em 8px 0.5em`,
      color: `rgba(250, 81, 81, 1)`,
    },
  },
  paragraph: {
    margin: `1em 8px`,
    "letter-spacing": `0.1em`,
    color: `#3f3f3f`,
    "font-size": `15px`,
    "line-height": `1.75`,
  },
  blockquoteParagraph: {
    "letter-spacing": `0.1em`,
    color: `rgb(80, 80, 80)`,
    display: `block`,
    "font-size": `15px`,
    "line-height": `1.75`,
  },
  list: {
    ol: {
      "margin-left": `0`,
      "padding-left": `1em`,
      "list-style": "decimal",
      color: `#3f3f3f`,
    },
    ul: {
      "margin-left": `0`,
      "padding-left": `1em`,
      "list-style": `disc`,
      color: `#3f3f3f`,
    },
  },
  listItem: {
    margin: `0.2em 8px`,
    color: `#3f3f3f`,
    "font-size": `15px`,
    "line-height": `1.75`,
  },
  quote: {
    "font-style": `normal`,
    "border-left": `none`,
    padding: `0.5em 0.75em`,
    "border-radius": `8px`,
    color: `rgba(0,0,0,0.5)`,
    background: `#f7f7f7`,
    margin: `0`,
  },
  hr: {
    "border-style": `solid`,
    "border-width": `1px 0 0`,
    "border-color": `rgba(0,0,0,0.1)`,
    "-webkit-transform-origin": `0 0`,
    "-webkit-transform": `scale(1, 0.5)`,
    "transform-origin": `0 0`,
    transform: `scale(1, 0.5)`,
  },
  link: {
    color: `#576b95`,
    "font-size": `15px`,
    "line-height": `1.75`,
  },
  // 字体加粗样式
  strong: {
    color: `rgba(250, 81, 81, 1)`,
    "font-weight": `bold`,
    "font-size": `15px`,
    "line-height": `1.75`,
  },
  em: {
    "font-style": "italic",
    "font-size": `15px`,
    "line-height": `1.75`,
  },
};
