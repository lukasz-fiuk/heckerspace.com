import styled, { css } from "styled-components";

import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";
import { zIndex } from "styled/mixins";

export const TableOfContentsWrapper = styled.nav`
  z-index: ${zIndex("aboveContent")};
`;

export const MobileTitle = styled.h2`
  ${fonts.h3}
  font-weight: bold;
  line-height: 2;

  ${media.desktopLarge} {
    display: none;
  }
`;

export const ListOfChapters = styled.ul<{
  offsetX?: number;
}>`
  display: grid;

  list-style-type: square;
  list-style-position: inside;

  ${media.desktopLarge} {
    position: absolute;
    bottom: 0.5em;
    left: 5vw;
    margin-left: ${({ offsetX }) => offsetX && `${-offsetX}px`};

    list-style-type: none;
    ${fonts.small}
  }
`;

export const ListItem = styled.li<{ isHighlighted: boolean }>`
  display: list-item;

  ${fonts.body}
  line-height: 2;
  white-space: nowrap;
  color: var(--primary);
  transition: 0.3s ease-in-out;
  opacity: 0.5;

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      opacity: 1;
    `}

  & > * {
    cursor: pointer;
  }

  ${media.desktopLarge} {
    ${fonts.small}
    color: var(--primary);

    &:hover {
      opacity: 1;
    }
  }
`;
