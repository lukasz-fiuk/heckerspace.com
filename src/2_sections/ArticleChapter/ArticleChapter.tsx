import React, { FC, useEffect, useRef } from "react";

import { useInView } from "framer-motion";

import Markdown from "1_components/Markdown/Markdown";
import { setGlobalState } from "context/globalState";

import * as S from "./ArticleChapter.styled";

export interface ArticleChapterProps {
  chapterName: string;
  content: string;
}

const ArticleChapter: FC<ArticleChapterProps> = ({
  chapterName,
  content,
  ...rest
}) => {
  const chapterRef = useRef<HTMLElement>(null);
  const isInView = useInView(chapterRef);

  useEffect(() => {
    isInView && setGlobalState("currentChapter", chapterName);
  }, [isInView, chapterName]);

  return (
    <S.ArticleChapterWrapper id={chapterName} ref={chapterRef} {...rest}>
      <Markdown markdown={content} />
    </S.ArticleChapterWrapper>
  );
};
export default ArticleChapter;
