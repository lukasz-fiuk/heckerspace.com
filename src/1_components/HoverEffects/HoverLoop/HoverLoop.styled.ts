import { m } from "framer-motion";
import styled from "styled-components";

export const HoverLoopWrapper = styled.span`
  display: block;

  position: relative;
  overflow: hidden;
`;

export const LoopItem = styled(m.span)`
  display: block;
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
`;

export const DimensionGhost = styled.span`
  display: block;

  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`;
