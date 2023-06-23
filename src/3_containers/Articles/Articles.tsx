import { FC } from "react";

import { RecentArticles } from "2_sections/ArticleList/ArticleList";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import S from "./Articles.module.scss";

export interface ArticlesProps {
  modules: Modules;
  recentArticles: RecentArticles;
}

const Articles: FC<ArticlesProps> = ({ modules, recentArticles }) => {
  return (
    <div className={S.ArticlesPageWrapper}>
      <ModuleRenderer modules={modules} recentArticles={recentArticles} />
    </div>
  );
};
export default Articles;
