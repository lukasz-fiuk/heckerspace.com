import { FC } from "react";

import AnimatedLine from "1_components/AnimatedLine/AnimatedLine";
import IconButton from "1_components/Buttons/IconButton/IconButton";
import { IconVariant } from "1_components/Icon/Icon";
import RevealItem from "1_components/RevealItem/RevealItem";
import { Directions } from "types/commonTypes";

import S from "./ArticleList.module.scss";
import ListItem from "./ListItem/ListItem";

export type RecentArticles = Array<{
  id: string;
  slug: string;
  title: string;
  createdAt: string;
}>;
export interface ArticleListProps {
  title: string;
  recentArticles?: RecentArticles;
  buttonHref: string;
  buttonLabel: string;
  buttonHoverDirection: Directions;
  buttonIcon: IconVariant;
  buttonReverse: boolean;
}

const ArticleList: FC<ArticleListProps> = ({
  title = "Latest articles",
  recentArticles,
  buttonHref,
  buttonLabel,
  buttonIcon,
  buttonHoverDirection,
  buttonReverse,
  ...rest
}) => {
  return (
    <section className={S.ArticlesListWrapper} {...rest}>
      <div className={S.TitleWrapper}>
        <h2 className={S.Title}>{title}</h2>

        <AnimatedLine className={S.Underline} duration={2.4} />
      </div>

      <ul className={S.List}>
        {recentArticles &&
          recentArticles.map(({ id, title, slug }, index) => (
            <ListItem
              key={id}
              id={id}
              title={title}
              index={index}
              href={"/article/" + slug}
            />
          ))}
      </ul>

      <RevealItem>
        <IconButton
          className={S.ArrowButton}
          href={buttonHref}
          label={buttonLabel}
          iconVariant={buttonIcon}
          hoverDirection={buttonHoverDirection}
          reverse={buttonReverse}
        />
      </RevealItem>
    </section>
  );
};
export default ArticleList;
