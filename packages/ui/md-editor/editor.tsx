import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

const code = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

export const MarkdownEditor = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const handleChange = (value: string) => {
    onChange && onChange(value);
  };
  return (
    <CodeMirror
      className="md-editor"
      value={code}
      onChange={handleChange}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      width="100%"
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        highlightSelectionMatches: false,
        drawSelection: false,
      }}
    />
  );
};
