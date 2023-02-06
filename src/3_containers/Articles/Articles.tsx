import React, { FC } from "react";

import { RecentArticles } from "2_sections/ArticleList/ArticleList";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import * as S from "./Articles.styled";

export interface ArticlesProps {
  modules: Modules;
  recentArticles: RecentArticles;
}

const Articles: FC<ArticlesProps> = ({ modules, recentArticles }) => {
  return (
    <S.ArticlesPageWrapper>
      <ModuleRenderer modules={modules} recentArticles={recentArticles} />
    </S.ArticlesPageWrapper>
  );
};
export default Articles;
