import { FC } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as darkTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

import CopyButton from "1_components/Buttons/CopyButton/CopyButton";

import S from "./CodeBlock.module.scss";
import { registerLanguages } from "./utils";

type CodeLanguages =
  | "tsx"
  | "jsx"
  | "javascript"
  | "typescript"
  | "css"
  | "scss"
  | "markdown"
  | "html"
  | string;

interface CodeBlockProps {
  language: CodeLanguages;
  className?: string;
  code: string;
}

/////////////////////////////////////
// Registering supported languages
/////////////////////////////////////
registerLanguages();

export const SyntaxHighlighterStyles = {
  background: "unset",
  padding: 16,
  margin: 0,
  border: "none",
  fontSize: "clamp(12px, 1.6rem, 16px)",
  lineHeight: 2,
};

const CodeBlock: FC<CodeBlockProps> = ({
  language,
  code = `console.log("hello world")`,
  ...rest
}) => {
  return (
    <section className={S.CodeBlockWrapper} {...rest}>
      <div className={S.Topbar}>
        {"💾 >_ " + language}

        <CopyButton
          className={S.CopyCode}
          valueToCopy={code}
          defaultText="copy 📋"
        />
      </div>

      <SyntaxHighlighter
        wrapLongLines
        wrapLines
        language={language}
        style={darkTheme}
        customStyle={SyntaxHighlighterStyles}
      >
        {code}
      </SyntaxHighlighter>
    </section>
  );
};

export default CodeBlock;
