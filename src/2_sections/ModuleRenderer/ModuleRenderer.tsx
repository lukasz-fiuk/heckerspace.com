import React, { FC } from "react";

import ArticleChapter, {
  ArticleChapterProps,
} from "2_sections/ArticleChapter/ArticleChapter";
import ArticleList, {
  ArticleListProps,
  RecentArticles,
} from "2_sections/ArticleList/ArticleList";
import Hero, { HeroProps } from "2_sections/Hero/Hero";

interface BaseModuleProps {
  id: string;
  __typename: string;
  [key: string]: any;
}

export type Modules = Array<BaseModuleProps>;

export interface ModuleRendererProps {
  modules: Modules;
  recentArticles?: RecentArticles;
}

const ModuleRenderer: FC<ModuleRendererProps> = ({
  modules,
  recentArticles,
}) => {
  const renderModules = (modules: Modules) => {
    return modules.map(({ id, __typename, ...content }) => {
      switch (__typename) {
        case "Hero":
          return <Hero key={id} {...(content as HeroProps)} />;

        case "ArticleList":
          return (
            <ArticleList
              key={id}
              recentArticles={recentArticles}
              {...(content as ArticleListProps)}
            />
          );

        case "Chapter":
          return (
            <ArticleChapter key={id} {...(content as ArticleChapterProps)} />
          );
      }
    });
  };

  return <>{modules && renderModules(modules)}</>;
};
export default ModuleRenderer;
