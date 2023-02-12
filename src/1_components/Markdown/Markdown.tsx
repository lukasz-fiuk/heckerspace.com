import { FC, useEffect, useState } from "react";

import { compiler } from "markdown-to-jsx";
import { useDarkMode } from "usehooks-ts";

import { slugify } from "utils/slugify";

import * as S from "./Markdown.styled";
import AnchorTag from "./Overrides/AnchorTag/AnchorTag";
import CodeBlock from "./Overrides/CodeBlock/CodeBlock";
import ListItem from "./Overrides/ListItem/ListItem";

export interface MarkdownProps {
  markdown: string;
  raw?: boolean;
  id?: string;
  disableFocus?: boolean;
}

const Markdown: FC<MarkdownProps> = ({
  markdown,
  raw,
  disableFocus,
  ...rest
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDarkTheme(isDarkMode);
    }
  }, [isDarkMode]);

  const compiledText = compiler(markdown, {
    wrapper: null,
    slugify: (source) => slugify(`h-${source}`),
    overrides: {
      a: ({ children, ...rest }) => (
        <AnchorTag {...rest} disableFocus={disableFocus} target="_blank">
          {children}
        </AnchorTag>
      ),
      li: ListItem,
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
