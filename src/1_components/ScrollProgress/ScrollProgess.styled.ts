import { m } from "framer-motion";
import styled from "styled-components";

import { zIndex } from "styled/mixins";

export const ScrollIndicator = styled(m.div)`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${zIndex("absoluteTop")};

  width: 100vw;
  height: 8px;
  background: var(--primary);

  transform-origin: left;
  transform: scaleX(0);
`;
