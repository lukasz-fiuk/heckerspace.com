import { m } from "framer-motion";
import styled, { css } from "styled-components";

export const HoverReplaceWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
`;

export const ReplaceItem = styled(m.div)<{ $second?: boolean }>`
  display: block;

  ${({ $second }) =>
    $second &&
    css`
      position: absolute;
      inset: 0;
    `};
`;
