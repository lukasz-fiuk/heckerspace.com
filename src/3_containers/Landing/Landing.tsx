import { FC } from "react";

import { RecentArticles } from "2_sections/ArticleList/ArticleList";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import S from "./Landing.module.scss";

export interface LandingProps {
  recentArticles: RecentArticles;
  modules: Modules;
}

const Landing: FC<LandingProps> = ({ recentArticles, modules }) => {
  return (
    <div className={S.LandingPageWrapper}>
      <ModuleRenderer modules={modules} recentArticles={recentArticles} />
    </div>
  );
};

export default Landing;
