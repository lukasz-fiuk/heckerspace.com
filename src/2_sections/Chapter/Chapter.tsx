import { FC, useEffect, useRef } from "react";

import { m, useInView } from "framer-motion";

import Markdown from "1_components/Markdown/Markdown";
import { setGlobalState } from "context/globalState";
import { slugify } from "utils/slugify";

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
    <m.section
      id={slugify(chapterName)}
      ref={chapterRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      {...rest}
    >
      <Markdown markdown={content} disableFocus={disableFocus} />
    </m.section>
  );
};
export default Chapter;
