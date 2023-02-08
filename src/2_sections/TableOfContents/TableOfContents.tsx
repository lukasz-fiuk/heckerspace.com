import { FC } from "react";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import { useGlobalState } from "context/globalState";
import { scrollToId } from "utils/scrollToID";

import * as S from "./TableOfContents.styled";

export interface TableOfContentsProps {
  chapters: Array<string>;
  offsetX?: number;
}
export const TableOfContents: FC<TableOfContentsProps> = ({
  chapters,
  offsetX,
  ...rest
}) => {
  const [currentChapter, setCurrentChapter] = useGlobalState("currentChapter");

  const MARGIN_TOP = 240;

  return (
    <S.TableOfContentsWrapper {...rest}>
      <S.MobileTitle>Table of contents</S.MobileTitle>
      <S.ListOfChapters offsetX={offsetX}>
        {chapters.map((chapterName) => (
          <S.ListItem
            key={chapterName}
            isHighlighted={currentChapter === chapterName}
          >
            <button
              onClick={() => {
                scrollToId(chapterName, MARGIN_TOP);
                setCurrentChapter(chapterName);
              }}
            >
              <HoverReplace direction="up">{chapterName}</HoverReplace>
            </button>
          </S.ListItem>
        ))}
      </S.ListOfChapters>
    </S.TableOfContentsWrapper>
  );
};
