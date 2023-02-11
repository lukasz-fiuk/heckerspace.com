import styled from "styled-components";

import AnimatedLine from "1_components/AnimatedLine/AnimatedLine";
import ArticleHeader from "2_sections/ArticleHeader/ArticleHeader";
import { TableOfContents } from "2_sections/TableOfContents/TableOfContents";
import media from "styled/mediaQueries";

export const SingleArticleWrapper = styled.div`
  position: relative;
  display: grid;
  row-gap: 12rem;

  margin: 120px auto 0;
  max-width: 800px;
`;

export const Article = styled.article`
  display: grid;
  row-gap: clamp(64px, 8rem, 96px);
`;

export const Header = styled(ArticleHeader)`
  margin-top: 12rem;
`;

export const MobileChapterSelector = styled(TableOfContents)`
  grid-row: 2;

  ${media.desktopLarge} {
    display: none;
  }
`;

export const DesktopChapterSelector = styled(TableOfContents)`
  display: none;

  ${media.desktopLarge} {
    display: block;
    height: 0;

    position: sticky;
    bottom: 5vw;
  }
`;

export const Divider = styled(AnimatedLine)`
  width: 100%;
  height: 1px;
  background: var(--primary_75);
`;
