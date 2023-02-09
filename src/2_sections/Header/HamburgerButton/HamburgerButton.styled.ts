import { m } from "framer-motion";
import styled from "styled-components";

import media from "styled/mediaQueries";
import { vh } from "styled/mixins";
import { PALETTE } from "styled/palette";

export const HamburgerButtonWrapper = styled(m.button)`
  position: absolute;
  top: ${vh(100)};
  left: 16px;

  display: grid;
  place-items: center;

  background-color: ${PALETTE.black_75};
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  width: 72px;
  height: 72px;
  pointer-events: all;

  margin-top: -88px; // Hamburger height + padding

  text-align: center;
  font-size: 16px;
  cursor: pointer;

  ${media.desktop} {
    display: none;
  }
`;
