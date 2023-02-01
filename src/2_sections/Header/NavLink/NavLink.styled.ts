import Link from "next/link";
import styled from "styled-components";

import Icon from "1_components/Icon/Icon";
import RevealItem from "1_components/RevealItem/RevealItem";

export const NavLinkWrapper = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1em;
  gap: 8px;

  text-transform: lowercase;
  color: ${({ $isActive }) =>
    $isActive ? "var(--primary)" : "var(--primary_50)"};

  font-size: 24px;
  line-height: 1;
  font-weight: 300;

  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  :focus-visible {
    color: var(--primary);
  }
`;

export const IconWrapper = styled(RevealItem)`
  pointer-events: none;

  width: 1em;
  height: 1em;
`;

export const StarIcon = styled(Icon)`
  width: 1em;
  height: 1em;
`;
