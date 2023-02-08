import { FC } from "react";

import { IconVariant } from "1_components/Icon/Icon";
import { Directions } from "types/commonTypes";

import * as S from "./ArticleList.styled";
import ListItem from "./ListItem/ListItem";

export type RecentArticles = Array<{
  id: string;
  slug: string;
  title: string;
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
    <S.ArticlesListWrapper {...rest}>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>

        <S.Underline duration={2.4} />
      </S.TitleWrapper>

      <S.List>
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
      </S.List>

      <S.RevealWrapper>
        <S.ArrowButton
          href={buttonHref}
          label={buttonLabel}
          iconVariant={buttonIcon}
          hoverDirection={buttonHoverDirection}
          reverse={buttonReverse}
        />
      </S.RevealWrapper>
    </S.ArticlesListWrapper>
  );
};
export default ArticleList;
