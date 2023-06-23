import { FC, useEffect, useState } from "react";

import Link from "next/link";

import AnimatedLine from "1_components/AnimatedLine/AnimatedLine";
import HoverLoop from "1_components/HoverEffects/HoverLoop/HoverLoop";
import Icon from "1_components/Icon/Icon";
import Markdown from "1_components/Markdown/Markdown";
import { getArticleBadge } from "utils/handleArticleBadge";

import S from "./ListItem.module.scss";

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
    <li
      className={S.ListItemWrapper}
      onMouseOver={showArrow}
      onMouseLeave={hideArrow}
      {...rest}
    >
      <Link
        className={S.StyledLink}
        href={href}
        tabIndex={0}
        aria-label={title}
        onFocus={showArrow}
        onBlur={hideArrow}
        scroll={false}
      >
        <h3 className={S.ArticleTitle}>
          <Markdown markdown={title} raw />
        </h3>

        <HoverLoop
          className={S.ArrowWrapper}
          disableInnerHover
          isHovering={isHovering}
          direction="right"
        >
          <Icon className={S.ArrowIcon} variant="arrowRight" />
        </HoverLoop>
        <span className={S.StatusLabel}>{badge}</span>

        <AnimatedLine
          className={S.Underline}
          duration={2.4}
          delay={0.1 + index * 0.1}
          dissolve
        />
      </Link>
    </li>
  );
};
export default ListItem;
