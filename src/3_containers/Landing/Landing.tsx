import React, { FC } from "react";

import { RecentArticles } from "2_sections/ArticleList/ArticleList";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

export interface LandingProps {
  recentArticles: RecentArticles;
  modules: Modules;
}

const Landing: FC<LandingProps> = ({ recentArticles, modules }) => {
  return (
    <>
      <ModuleRenderer modules={modules} recentArticles={recentArticles} />
    </>
  );
};
export default Landing;
