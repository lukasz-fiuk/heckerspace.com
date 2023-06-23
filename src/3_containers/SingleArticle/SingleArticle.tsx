import { FC, useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";

import AnimatedLine from "1_components/AnimatedLine/AnimatedLine";
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
import { TableOfContents } from "2_sections/TableOfContents/TableOfContents";
import { useElementOffset } from "hooks/useElementOffset";
import { estimateTotalReadingTime } from "utils/estimateTotalReadingTime";
import { getArticleBadge, storeArticleBadge } from "utils/handleArticleBadge";

import S from "./SingleArticle.module.scss";

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
  chaptersList: Array<string> | null;
}

const Article: FC<ArticleProps> = ({
  id,
  title,
  modules,
  createdAt,
  cover,
  nextArticleContent,
  completedBadge,
  viewedBadge,
  chaptersList,
}) => {
  const articleWrapperRef = useRef<HTMLDivElement>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const { offsetX } = useElementOffset(articleWrapperRef);

  useEffect(() => {
    if (getArticleBadge(id) === completedBadge) {
      setIsCompleted(true);
    } else {
      storeArticleBadge(id, viewedBadge);
    }
  }, [id, completedBadge, viewedBadge]);

  const handleCompleteButtonClick = () => {
    storeArticleBadge(id, completedBadge);
    setIsCompleted(true);
  };

  const shouldRenderChapters =
    chaptersList && chaptersList.length > 1 && offsetX;

  return (
    <>
      <div className={S.SingleArticleWrapper} ref={articleWrapperRef}>
        <article className={S.Article}>
          <ArticleHeader
            className={S.Header}
            cover={cover}
            title={title}
            createdAt={createdAt}
            estimatedReadingTime={estimateTotalReadingTime(modules)}
          />

          <ModuleRenderer modules={modules} />

          {shouldRenderChapters && (
            <>
              <TableOfContents
                className={S.MobileChapterSelector}
                chapters={chaptersList}
              />
              <TableOfContents
                className={S.DesktopChapterSelector}
                chapters={chaptersList}
                offsetX={offsetX}
              />
            </>
          )}
        </article>

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

        <AnimatedLine className={S.Divider} />

        <Discussion />

        {nextArticleContent && (
          <NextArticle
            title={nextArticleContent.title}
            modules={nextArticleContent.modules}
            slug={nextArticleContent.slug}
          />
        )}
      </div>
    </>
  );
};
export default Article;
