import styled from "styled-components";

import IconButton from "1_components/Buttons/IconButton/IconButton";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import { COMMONS } from "styled/commons";
import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";

export const NextArticleWrapper = styled(FadeInOut)`
  display: grid;
  place-items: center;
  padding: 12rem 0;

  height: calc(100vh - ${COMMONS.footerHeight.mobile}px);

  ${media.desktop} {
    height: calc(100vh - ${COMMONS.footerHeight.desktop}px);
  }
`;

export const Heading = styled.div`
  display: grid;
  place-items: center;
`;

export const NextButton = styled(IconButton)`
  ${fonts.small}
  color:var(--primary);
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  ${fonts.h2}
  font-weight: bold;
  text-align: center;
`;

export const FadedContentWrapper = styled.div`
  position: relative;
  height: 50vh;
  overflow: hidden;

  mask-image: linear-gradient(to bottom, black, transparent);
`;
