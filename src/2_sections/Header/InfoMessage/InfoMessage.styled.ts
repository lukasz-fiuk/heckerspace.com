import { m } from "framer-motion";
import styled from "styled-components";

import { zIndex } from "styled/mixins";
import { PALETTE } from "styled/palette";

export const InfoMessageWrapper = styled(m.dialog)`
  all: unset;

  position: fixed;
  bottom: 0;
  left: 50vw;
  z-index: ${zIndex("absoluteTop")};

  border-radius: 8px;
  background: ${PALETTE.black_75};
  padding: 1em;

  font-size: 16px;
  color: ${PALETTE.white};
  text-align: center;
`;

export const Shader = styled(m.div)`
  position: fixed;
  inset: 0;

  background-color: var(--background);

  z-index: ${zIndex("aboveContent")};
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;

  width: 32px;
  height: 32px;
  text-align: center;
  background: var(--background);
  border: 2px solid ${PALETTE.black_75};
  aspect-ratio: 1;
  border-radius: 100%;

  user-select: none;
  padding: 8px;

  display: grid;
  place-items: center;
  line-height: 1;
  cursor: pointer;
  color: var(--primary);
`;
