import { FC } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as darkTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

import * as S from "./CodeBlock.styled";
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

const CodeBlock: FC<CodeBlockProps> = ({
  language,
  code = `console.log("hello world")`,
  ...rest
}) => {
  return (
    <S.CodeBlockWrapper {...rest}>
      <S.Topbar>
        {"💾 >_ " + language}

        <S.CopyCode valueToCopy={code} defaultText="copy 📋" />
      </S.Topbar>

      <SyntaxHighlighter
        wrapLongLines
        wrapLines
        language={language}
        style={darkTheme}
        customStyle={S.SyntaxHighlighterStyles}
      >
        {code}
      </SyntaxHighlighter>
    </S.CodeBlockWrapper>
  );
};

export default CodeBlock;
