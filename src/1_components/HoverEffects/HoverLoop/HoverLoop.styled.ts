import { m } from "framer-motion";
import styled from "styled-components";

export const HoverLoopWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
`;

export const LoopItem = styled(m.div)`
  position: absolute;
  inset: 0;
  display: block;

  width: 100%;
  height: 100%;
`;

export const DimensionGhost = styled.span`
  display: block;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`;
