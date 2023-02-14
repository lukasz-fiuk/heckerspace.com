import { m } from "framer-motion";
import styled from "styled-components";

import media from "styled/mediaQueries";
import { PALETTE } from "styled/palette";

export const ShortcutCueWrapper = styled(m.kbd)`
  all: unset;
  display: none;

  ${media.desktop} {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--primary_75);
    white-space: nowrap;
    line-height: 1;

    border: 1px solid ${PALETTE.black_50};
    border-radius: 4px;
    padding: 4px;

    width: min-content;
  }
`;
