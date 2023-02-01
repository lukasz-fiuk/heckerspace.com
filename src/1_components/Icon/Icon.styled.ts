import styled from "styled-components";

import ArrowRight from "svg/icons/arrowRight.svg";
import ArrowUp from "svg/icons/arrowUp.svg";

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: inherit;

  & svg {
    color: inherit;
    width: 100%;
    height: 100%;
  }
`;

export const SvgArrowDown = styled(ArrowUp)`
  transform: scaleY(-1);
`;

export const SvgArrowLeft = styled(ArrowRight)`
  transform: scaleX(-1);
`;
