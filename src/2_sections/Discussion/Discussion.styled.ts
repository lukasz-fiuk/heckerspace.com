import styled from "styled-components";

import AnimatedLine from "1_components/AnimatedLine/AnimatedLine";
import { COMMONS } from "styled/commons";
import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";

export const DiscussionWrapper = styled.section`
  display: grid;
  place-items: center;
  row-gap: 120px;

  padding-bottom: 120px;

  min-height: calc(100vh - ${COMMONS.footerHeight.mobile}px);

  ${media.desktop} {
    min-height: calc(100vh - ${COMMONS.footerHeight.desktop}px);
  }
`;

export const Divider = styled(AnimatedLine)`
  width: 100%;
  height: 1px;
  background: var(--secondary);
`;

export const Title = styled.h2`
  ${fonts.h2}
  font-weight: bold;
`;
