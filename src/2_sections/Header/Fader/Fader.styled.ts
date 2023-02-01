import { m } from "framer-motion";
import styled from "styled-components";

import media from "styled/mediaQueries";

export const FaderWrapper = styled(m.div)`
  position: fixed;
  inset: 0 0 auto 0;
  pointer-events: none;

  height: 60px;
  background: var(--backgroundToTransparent);

  ${media.tablet} {
    height: 96px;
  }
`;
