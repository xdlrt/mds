import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export interface MarkdownEditorProps {
  onChange?: (value: string) => void;
}

export const MarkdownEditor = (props: MarkdownEditorProps) => {
  const { onChange } = props;
  const handleChange = (value: string) => {
    onChange && onChange(value);
  };
  return (
    <CodeMirror
      className="md-editor"
      width="100%"
      onChange={handleChange}
      extensions={[
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
        }),
      ]}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        highlightSelectionMatches: false,
        drawSelection: false,
      }}
    />
  );
};
