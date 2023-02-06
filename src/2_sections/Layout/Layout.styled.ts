import styled from "styled-components";

import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import { COMMONS } from "styled/commons";
import media from "styled/mediaQueries";

export const Main = styled(FadeInOut)`
  margin: 0 auto;
  padding: 0 16px;

  max-width: ${COMMONS.maxWidth}px;
  min-height: 100vh;

  ${media.desktop} {
    width: 75vw;
  }
`;
