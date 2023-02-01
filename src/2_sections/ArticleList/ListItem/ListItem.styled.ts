import Link from "next/link";
import styled from "styled-components";

import AnimatedUnderline from "1_components/AnimatedLine/AnimatedLine";
import HoverLoop from "1_components/HoverEffects/HoverLoop/HoverLoop";
import Icon from "1_components/Icon/Icon";
import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";

export const ListItemWrapper = styled.li`
  & :focus-visible {
    outline: 0;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  column-gap: 80px;

  cursor: pointer;
`;

export const ArticleTitle = styled.h3`
  ${fonts.h3}
  font-weight: bold;

  padding: 1.25em 0;
  cursor: pointer;
`;

export const ArrowWrapper = styled(HoverLoop)`
  display: none;

  ${media.desktop} {
    display: initial;
  }
`;

export const ArrowIcon = styled(Icon)`
  height: 54px;
  width: 86px;
  cursor: pointer;
`;

export const Underline = styled(AnimatedUnderline)`
  position: absolute;
  inset: auto 0 0 0;

  transform-origin: left;
  border-bottom: 1px solid var(--primary_50);
`;

export const StatusLabel = styled.span`
  position: absolute;
  left: 0;
  bottom: 16px;
  width: 100%;
  height: 1.5em;

  color: var(--primary_50);
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;
