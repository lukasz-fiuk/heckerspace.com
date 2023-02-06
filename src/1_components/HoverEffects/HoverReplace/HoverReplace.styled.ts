import { m } from "framer-motion";
import styled, { css } from "styled-components";

export const HoverReplaceWrapper = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
`;

export const ReplaceItem = styled(m.span)<{ $second?: boolean }>`
  display: block;

  ${({ $second }) =>
    $second &&
    css`
      position: absolute;
      inset: 0;
      pointer-events: none;
      display: block;
    `};
`;
