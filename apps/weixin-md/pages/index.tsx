import React, { ChangeEvent, useState } from "react";
import { MarkdownEditor, Preview } from "ui";
import { defaultTheme, WXRenderer } from "md-converter";
import { marked } from "marked";

export default function Web() {
  const renderer = new WXRenderer({ theme: defaultTheme });
  const output = renderer.assemble();
  marked.use({ renderer: output });
  const [preview, setPreview] = useState("");
  const handleChange = (event: ChangeEvent<HTMLAreaElement>) => {
    setPreview(marked.parse(event.target.value));
  };
  return (
    <div>
      <h1>My great docs</h1>
      <MarkdownEditor onChange={handleChange}></MarkdownEditor>
      <Preview preview={preview}></Preview>
    </div>
  );
}
