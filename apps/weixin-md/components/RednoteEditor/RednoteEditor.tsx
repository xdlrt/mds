import React, { useState } from "react";
import { MarkdownEditor, Preview } from "ui";
import { defaultTheme, WXRenderer } from "md-converter";
import { marked } from "marked";

export const RednoteEditor = () => {
  const renderer = new WXRenderer({ theme: defaultTheme });
  const output = renderer.assemble();
  marked.use({ renderer: output });
  const [preview, setPreview] = useState("");
  const handleChange = (value: string) => {
    const content = marked.parse(value);
    const suffix = renderer.buildSuffix();
    setPreview(content + suffix);
  };
  return (
    <div className="mx-auto flex max-w-screen-xl w-full h-full">
      <div className="border border-zinc-200 w-3/5">
        <MarkdownEditor onChange={handleChange}></MarkdownEditor>
      </div>
      <div className="border border-zinc-200 border-l-0 w-2/5">
        <Preview preview={preview}></Preview>
      </div>
    </div>
  );
};
