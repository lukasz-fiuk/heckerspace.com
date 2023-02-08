import { FC, useEffect, useState } from "react";

import Markdown from "1_components/Markdown/Markdown";
import { getArticleBadge } from "utils/handleArticleBadge";

import * as S from "./ListItem.styled";

export interface ListItemProps {
  title: string;
  href: string;
  index: number;
  id: string;
}

const ListItem: FC<ListItemProps> = ({
  title,
  href = "/",
  index,
  id,
  ...rest
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [badge, setBadge] = useState("");

  useEffect(() => {
    setBadge(getArticleBadge(id));
  }, [id]);

  function showArrow() {
    !isHovering && setIsHovering(true);
  }

  function hideArrow() {
    setIsHovering(false);
  }

  return (
    <S.ListItemWrapper
      onMouseOver={showArrow}
      onMouseLeave={hideArrow}
      {...rest}
    >
      <S.StyledLink
        href={href}
        tabIndex={0}
        aria-label={title}
        onFocus={showArrow}
        onBlur={hideArrow}
        scroll={false}
      >
        <S.ArticleTitle>
          <Markdown markdown={title} raw />
        </S.ArticleTitle>

        <S.ArrowWrapper
          disableInnerHover
          isHovering={isHovering}
          direction="right"
        >
          <S.ArrowIcon variant="arrowRight" />
        </S.ArrowWrapper>
        <S.StatusLabel>{badge}</S.StatusLabel>

        <S.Underline duration={2.4} delay={0.1 + index * 0.1} dissolve />
      </S.StyledLink>
    </S.ListItemWrapper>
  );
};
export default ListItem;
