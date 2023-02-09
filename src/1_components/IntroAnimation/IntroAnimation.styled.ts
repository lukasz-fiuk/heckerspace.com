import { m } from "framer-motion";
import styled from "styled-components";

import { zIndex } from "styled/mixins";
import { PALETTE } from "styled/palette";

export const LoadingScreen = styled(m.div)<{ $isDarkMode: boolean }>`
  position: fixed;
  inset: 0 0 50vh 0;
  z-index: ${zIndex("absoluteTop")};

  background: ${({ $isDarkMode }) =>
    $isDarkMode ? PALETTE.black : PALETTE.white_50};
`;
