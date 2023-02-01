import React, { FC, useEffect, useState } from "react";

import { compiler } from "markdown-to-jsx";
import { useDarkMode } from "usehooks-ts";

import * as S from "./Markdown.styled";
import CodeBlock from "./Overrides/CodeBlock/CodeBlock";

export interface MarkdownProps {
  markdown: string;
  raw?: boolean;
  id?: string;
}

const Markdown: FC<MarkdownProps> = ({ markdown, raw, ...rest }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDarkTheme(isDarkMode);
    }
  }, [isDarkMode]);

  const compiledText = compiler(markdown, {
    wrapper: null,
    overrides: {
      code: ({ className, children }) => {
        const language =
          className !== undefined && className.replace("lang-", "");
        return (
          <>
            {className !== undefined ? (
              <CodeBlock
                className={className}
                language={language}
                code={children}
              />
            ) : (
              <code data-theme={isDarkTheme ? "dark" : "light"}>
                {children}
              </code>
            )}
          </>
        );
      },
    },
  });

  return (
    <>
      {raw ? (
        compiledText
      ) : (
        <S.DefaultSpacing {...rest}>{compiledText}</S.DefaultSpacing>
      )}
    </>
  );
};

export default Markdown;
