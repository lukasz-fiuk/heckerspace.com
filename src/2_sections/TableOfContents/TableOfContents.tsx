import { FC } from "react";

import clsx from "clsx";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import { useGlobalState } from "context/globalState";
import { scrollToId } from "utils/scrollToID";
import { slugify } from "utils/slugify";

import S from "./TableOfContents.module.scss";

export interface TableOfContentsProps {
  chapters: Array<string>;
  offsetX?: number;
  className?: string;
}
export const TableOfContents: FC<TableOfContentsProps> = ({
  chapters,
  offsetX,
  className,
  ...rest
}) => {
  const [currentChapter, setCurrentChapter] = useGlobalState("currentChapter");

  const MARGIN_TOP = 240;

  return (
    <nav {...rest} className={clsx(S.TableOfContentsWrapper, className)}>
      <h2 className={S.MobileTitle}>Table of contents</h2>
      <ul
        className={S.ListOfChapters}
        //  offsetX={offsetX}
      >
        {chapters.map((chapterName) => (
          <li
            className={S.ListItem}
            key={chapterName}
            // isHighlighted={currentChapter === chapterName}
          >
            <button
              onClick={() => {
                scrollToId(slugify(chapterName), MARGIN_TOP);
                setCurrentChapter(chapterName);
              }}
            >
              <HoverReplace direction="up">{chapterName}</HoverReplace>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
