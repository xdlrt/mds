import React, { useState } from "react";
import { MarkdownEditor, RednotePreview } from "ui";
import { RednoteRenderer, rednoteTheme } from "md-converter";
import { marked } from "marked";

export const RednoteEditor = () => {
  const renderer = new RednoteRenderer({ theme: rednoteTheme });
  const output = renderer.assemble();
  marked.use({ renderer: output });
  const [previews, setPreviews] = useState<string[]>([]);
  const handleChange = (value: string) => {
    const content = marked.parse(value);
    setPreviews(content.split("<hr />"));
  };
  return (
    <div className="mx-auto flex max-w-screen-xl w-full h-full">
      <div className="border border-zinc-200 w-3/5">
        <MarkdownEditor onChange={handleChange}></MarkdownEditor>
      </div>
      <div className="border border-zinc-200 border-l-0 w-2/5 overflow-y-auto">
        <RednotePreview previews={previews}></RednotePreview>
      </div>
    </div>
  );
};
