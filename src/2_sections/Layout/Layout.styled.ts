import { m } from "framer-motion";
import styled from "styled-components";

import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import { COMMONS } from "styled/commons";
import media from "styled/mediaQueries";

export const Main = styled(FadeInOut)`
  margin: 0 auto;
  padding: 0 16px 16px;

  max-width: ${COMMONS.maxWidth}px;
  min-height: 100vh;

  ${media.desktop} {
    width: 75vw;
  }
`;

export const PageTransition = styled(m.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;

  background-color: #2c2c2c;
  pointer-events: none;
  user-select: none;
`;
