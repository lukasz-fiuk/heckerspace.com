import { RecentArticles } from "2_sections/ArticleList/ArticleList";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import { getLandingData } from "./Landing.data";
import S from "./Landing.module.scss";

export interface LandingProps {
  recentArticles: RecentArticles;
  modules: Modules;
}

const LandingApp = async () => {
  const { recentArticles, modules } = await getLandingData();
  return (
    <div className={S.LandingPageWrapper}>
      <ModuleRenderer modules={modules} recentArticles={recentArticles} />
    </div>
  );
};
export default LandingApp;
