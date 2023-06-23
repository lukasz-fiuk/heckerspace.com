import { ArticleHeaderProps } from "2_sections/ArticleHeader/ArticleHeader";
import Discussion from "2_sections/Discussion/Discussion";
import { Modules } from "2_sections/ModuleRenderer/ModuleRenderer";

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
  slug: string;
}

const ArticleApp = async ({ params }: any) => {
  // const data = await getArticle(params.slug);
  // const { title, nextArticleContent } = data;
  // const articleWrapperRef = useRef<HTMLDivElement>(null);
  // const [isCompleted, setIsCompleted] = useState(false);
  // const { offsetX } = useElementOffset(articleWrapperRef);

  // useEffect(() => {
  //   if (getArticleBadge(id) === completedBadge) {
  //     setIsCompleted(true);
  //   } else {
  //     storeArticleBadge(id, viewedBadge);
  //   }
  // }, [id, completedBadge, viewedBadge]);

  // const handleCompleteButtonClick = () => {
  //   storeArticleBadge(id, completedBadge);
  //   setIsCompleted(true);
  // };

  // const shouldRenderChapters =
  //   chaptersList && chaptersList.length > 1 && offsetX;

  return (
    <>
      {/* <S.SingleArticleWrapper ref={articleWrapperRef}>
        <S.Article>
          <S.Header
            cover={cover}
            title={title}
            createdAt={createdAt}
            estimatedReadingTime={estimateTotalReadingTime(modules)}
          />

          <ModuleRenderer modules={modules} />

          {shouldRenderChapters && (
            <>
              <S.MobileChapterSelector chapters={chaptersList} />
              <S.DesktopChapterSelector
                chapters={chaptersList}
                offsetX={offsetX}
              />
            </>
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

        <S.Divider /> */}

      <Discussion />

      {/* {nextArticleContent && (
        <NextArticle
          title={nextArticleContent.title}
          modules={nextArticleContent.modules}
          slug={nextArticleContent.slug}
        />
      )} */}
      {/* </S.SingleArticleWrapper> */}
    </>
  );
};
export default ArticleApp;
