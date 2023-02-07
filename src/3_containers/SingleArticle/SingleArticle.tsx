import React, { FC, useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";

import ConfettiButton from "1_components/Buttons/ConfettiButton/ConfettiButton";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import ArticleHeader, {
  ArticleHeaderProps,
} from "2_sections/ArticleHeader/ArticleHeader";
import Discussion from "2_sections/Discussion/Discussion";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";
import NextArticle from "2_sections/NextArticle/NextArticle";
import { useElementOffset } from "hooks/useElementOffset";
import { estimateTotalReadingTime } from "utils/estimateTotalReadingTime";
import { getArticleBadge, storeArticleBadge } from "utils/handleArticleBadge";

import * as S from "./SingleArticle.styled";

export interface ArticleProps extends ArticleHeaderProps {
  id: string;
  modules: Modules;
  nextArticleContent: {
    id: string;
    title: string;
    slug: string;
    modules: Modules;
  };
  completedBadge: string;
  viewedBadge: string;
}

const Article: FC<ArticleProps> = ({
  id,
  title,
  modules,
  publishedAt,
  cover,
  nextArticleContent,
  completedBadge,
  viewedBadge,
}) => {
  const articleWrapperRef = useRef<HTMLDivElement>(null);
  const { offsetX } = useElementOffset(articleWrapperRef);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (getArticleBadge(id) === completedBadge) {
      setIsCompleted(true);
    } else {
      storeArticleBadge(id, viewedBadge);
    }
  }, [id, completedBadge, viewedBadge]);

  const extractChapterNames = (modules: Modules) => {
    const chapterNames: Array<string> = [];
    modules.forEach((module) => {
      if (module.__typename === "Chapter") {
        chapterNames.push(module.chapterName);
      }
    });
    return chapterNames;
  };

  const allChapters = extractChapterNames(modules);
  const shouldRenderChapters = allChapters.length > 1 && offsetX;

  const handleCompleteButtonClick = () => {
    storeArticleBadge(id, completedBadge);
    setIsCompleted(true);
  };

  return (
    <>
      <S.SingleArticleWrapper ref={articleWrapperRef}>
        <S.Article>
          <ArticleHeader
            cover={cover}
            title={title}
            publishedAt={publishedAt}
            estimatedReadingTime={estimateTotalReadingTime(modules)}
          />

          {shouldRenderChapters && (
            <S.MobileChapterSelector chapters={allChapters} />
          )}

          <ModuleRenderer modules={modules} />

          {shouldRenderChapters && (
            <S.DesktopChapterSelector
              chapters={allChapters}
              offsetX={offsetX}
            />
          )}
        </S.Article>

        <ConfettiButton onClick={handleCompleteButtonClick}>
          <AnimatePresence mode="wait">
            <FadeInOut
              duration={0.2}
              key={isCompleted ? "🏆 completed! 🏆" : "mark as completed ✅"}
            >
              {isCompleted ? "🏆 completed! 🏆" : "mark as completed ✅"}
            </FadeInOut>
          </AnimatePresence>
        </ConfettiButton>

        <S.Divider />

        <Discussion />

        {nextArticleContent && (
          <NextArticle
            title={nextArticleContent.title}
            modules={nextArticleContent.modules}
            slug={nextArticleContent.slug}
          />
        )}
      </S.SingleArticleWrapper>
    </>
  );
};
export default Article;
