import { FC } from "react";

import { RecentArticles } from "2_sections/ArticleList/ArticleList";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import * as S from "./Landing.styled";

export interface LandingProps {
  recentArticles: RecentArticles;
  modules: Modules;
}

const Landing: FC<LandingProps> = ({ recentArticles, modules }) => {
  return (
    <S.LandingPageWrapper>
      <ModuleRenderer modules={modules} recentArticles={recentArticles} />
    </S.LandingPageWrapper>
  );
};
export default Landing;
