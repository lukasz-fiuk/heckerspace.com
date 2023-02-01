import { m } from "framer-motion";
import styled from "styled-components";

export const RevealItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SlideIn = styled(m.div)`
  position: absolute;
  inset: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
`;

export const DimensionGhost = styled.div`
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`;
