import { ArticleHeaderProps } from "2_sections/ArticleHeader/ArticleHeader";
import { Modules } from "2_sections/ModuleRenderer/ModuleRenderer";
import Article from "3_containers/SingleArticle/SingleArticle";

import { getArticle } from "./SingleArticle.data";

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
  const data = await getArticle(params.slug);

  return <Article {...data} />;
};
export default ArticleApp;
