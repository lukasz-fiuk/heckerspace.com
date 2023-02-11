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
  padding: 1em !important;
  margin: 0;

  font-size: 16px !important;
  color: ${PALETTE.white};
  text-align: center;

  & code {
    display: inline-block;
    font-style: normal;
    font-weight: 500;

    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;

    border-radius: 8px;
    padding: 0 0.25em;
    margin: 0.1em 0;
    color: var(--primary);

    line-height: 1.5;
    transition: 0.3s ease-in-out;

    &[data-theme="light"] {
      background: ${PALETTE.white_75};
      border: 1px solid ${PALETTE.white_75};
    }

    &[data-theme="dark"] {
      background: ${PALETTE.black_20};
      border: 1px solid #262626;
    }
  }
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
