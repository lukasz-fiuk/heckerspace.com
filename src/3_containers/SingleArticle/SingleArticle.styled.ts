import styled from "styled-components";

import { TableOfContents } from "2_sections/TableOfContents/TableOfContents";
import media from "styled/mediaQueries";

export const SingleArticleWrapper = styled.article`
  position: relative;
  display: grid;

  margin: 120px auto;
  max-width: 880px;
`;

export const ArticleContent = styled.div`
  // Remove margins and padding from first H2 as spacing is added by Article Header
  & > *:first-child h2 {
    margin-top: 0;
    padding-top: 0;
  }
`;

export const MobileChapterSelector = styled(TableOfContents)`
  margin-bottom: 6.4rem;

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

export const CompleteButton = styled.button`
  justify-self: center;

  margin-top: 6rem;
  cursor: pointer;
  color: var(--primary_75);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--primary);
  }
`;
