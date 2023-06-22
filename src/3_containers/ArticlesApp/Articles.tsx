import { RecentArticles } from "2_sections/ArticleList/ArticleList";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import { getArticlesData } from "./Articles.data";
import S from "./Articles.module.scss";

export interface ArticlesProps {
  modules: Modules;
  recentArticles: RecentArticles;
}

const Articles = async () => {
  const { recentArticles, modules } = await getArticlesData();

  return (
    <div className={S.ArticlesPageWrapper}>
      <ModuleRenderer modules={modules} recentArticles={recentArticles} />
    </div>
  );
};
export default Articles;
