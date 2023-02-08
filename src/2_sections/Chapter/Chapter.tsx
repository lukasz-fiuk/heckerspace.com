import { FC, useEffect, useRef } from "react";

import { useInView } from "framer-motion";

import Markdown from "1_components/Markdown/Markdown";
import { setGlobalState } from "context/globalState";

import * as S from "./Chapter.styled";

export interface ChapterProps {
  chapterName: string;
  content: string;
  disableFocus?: boolean;
}

const Chapter: FC<ChapterProps> = ({
  chapterName,
  content,
  disableFocus,
  ...rest
}) => {
  const chapterRef = useRef<HTMLElement>(null);
  const isInView = useInView(chapterRef);

  useEffect(() => {
    isInView && setGlobalState("currentChapter", chapterName);
  }, [isInView, chapterName]);

  return (
    <S.ChapterWrapper id={chapterName} ref={chapterRef} {...rest}>
      <Markdown markdown={content} disableFocus={disableFocus} />
    </S.ChapterWrapper>
  );
};
export default Chapter;
