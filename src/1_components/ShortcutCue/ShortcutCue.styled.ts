import { m } from "framer-motion";
import styled from "styled-components";

import { PALETTE } from "styled/theme";

export const ShortcutCueWrapper = styled(m.kbd)`
  all: unset;

  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${PALETTE.black_50};
  white-space: nowrap;
  line-height: 1;

  border: 1px solid ${PALETTE.black_50};
  border-radius: 4px;
  padding: 4px;

  width: min-content;
`;
