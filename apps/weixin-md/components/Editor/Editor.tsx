import React, { useState } from "react";
import { MarkdownEditor, Preview } from "ui";
import { defaultTheme, WXRenderer } from "md-converter";
import { marked } from "marked";

export const Editor = () => {
  const renderer = new WXRenderer({ theme: defaultTheme });
  const output = renderer.assemble();
  marked.use({ renderer: output });
  const [preview, setPreview] = useState("");
  const handleChange = (value: string) => {
    setPreview(marked.parse(value));
  };
  return (
    <div className="mx-auto flex w-full h-full py-4 px-8">
      <div className="border border-zinc-200 w-1/2 h-full">
        <MarkdownEditor onChange={handleChange}></MarkdownEditor>
      </div>
      <div className="border border-zinc-200 w-1/2 h-full">
        <Preview preview={preview}></Preview>
      </div>
    </div>
  );
};
