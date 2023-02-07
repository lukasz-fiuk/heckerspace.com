import { m } from "framer-motion";
import styled from "styled-components";

import IconButton from "1_components/Buttons/IconButton/IconButton";
import { COMMONS } from "styled/commons";
import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";

export const NextArticleWrapper = styled.section`
  display: grid;
  place-items: center;
  padding: 12rem 0;
  row-gap: 6.4rem;

  height: calc(100vh - ${COMMONS.footerHeight.mobile}px);

  ${media.desktop} {
    height: calc(100vh - ${COMMONS.footerHeight.desktop}px);
  }
`;

export const Heading = styled(m.div)`
  display: grid;
  place-items: center;

  cursor: pointer;
`;

export const ArrowButton = styled(IconButton)`
  ${fonts.small}
  color:var(--primary);
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  ${fonts.h2}
  font-weight: bold;
  text-align: center;
`;

export const FadedContentWrapper = styled.div`
  position: relative;
  height: 50vh;
  overflow: hidden;
  user-select: none;
  pointer-events: none;

  mask-image: linear-gradient(to bottom, black, transparent);

  & * {
    user-select: none;
    pointer-events: none;
  }
`;
