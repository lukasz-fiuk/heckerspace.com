import styled from "styled-components";

import AnimatedLine from "1_components/AnimatedLine/AnimatedLine";
import IconButton from "1_components/Buttons/IconButton/IconButton";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import { COMMONS } from "styled/commons";
import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";

export const NextArticleWrapper = styled(FadeInOut)`
  display: grid;
  place-items: center;
  cursor: pointer;
  overflow-y: hidden;

  padding-bottom: 40px;

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

export const Divider = styled(AnimatedLine)`
  width: 100%;
  height: 1px;
  background: var(--secondary);

  margin: 0 0 120px 0;
`;

export const FadedContentWrapper = styled.div`
  position: relative;
  height: 50vh;
  overflow: hidden;

  mask-image: linear-gradient(to bottom, black, transparent);
`;
