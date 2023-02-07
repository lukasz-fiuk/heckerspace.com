import React, { FC } from "react";

import ArticleList, {
  RecentArticles,
  ArticleListProps,
} from "2_sections/ArticleList/ArticleList";
import Chapter, { ChapterProps } from "2_sections/Chapter/Chapter";
import Hero, { HeroProps } from "2_sections/Hero/Hero";
import useUniqueId from "hooks/useUniqueId";

interface BaseModuleProps {
  id: string;
  __typename: string;
  [key: string]: any;
}

export type Modules = Array<BaseModuleProps>;

export interface ModuleRendererProps {
  modules: Modules;
  recentArticles?: RecentArticles;
  disableFocus?: boolean;
}

const ModuleRenderer: FC<ModuleRendererProps> = ({
  modules,
  recentArticles,
  disableFocus,
}) => {
  // Add unique ID to prevent double keys if used more than once on a single page
  const componentId = useUniqueId();

  const renderModules = (modules: Modules) => {
    return modules.map(({ id, __typename, ...content }) => {
      switch (__typename) {
        case "Hero":
          return <Hero key={id + componentId} {...(content as HeroProps)} />;

        case "ArticleList":
          return (
            <ArticleList
              key={id + componentId}
              recentArticles={recentArticles}
              {...(content as ArticleListProps)}
            />
          );

        case "Chapter":
          return (
            <Chapter
              disableFocus={disableFocus}
              key={id + componentId}
              {...(content as ChapterProps)}
            />
          );
      }
    });
  };

  return <>{modules && renderModules(modules)}</>;
};
export default ModuleRenderer;
