import { m } from "framer-motion";
import styled, { css } from "styled-components";

export const HoverReplaceWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ReplaceItem = styled(m.div)<{ $second?: boolean }>`
  ${({ $second }) =>
    $second &&
    css`
      position: absolute;
      inset: 0;
      pointer-events: none;
    `};
`;
