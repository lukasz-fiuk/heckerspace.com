import styled from "styled-components";

import Icon from "1_components/Icon/Icon";

export const SocialMediaWrapper = styled.nav`
  display: grid;
  grid-auto-flow: column;
  column-gap: 16px;

  width: fit-content;
`;

export const IconWrapper = styled.a`
  transition: 0.3s ease-in-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const IconComp = styled(Icon)<{ iconSize: number }>`
  color: var(--primary);
  width: ${({ iconSize }) => iconSize && `${iconSize}px`};
`;
