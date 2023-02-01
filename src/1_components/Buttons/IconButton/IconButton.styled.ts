import Link from "next/link";
import styled from "styled-components";

import Icon from "1_components/Icon/Icon";
import { fonts } from "styled/fonts";

export const IconButtonWrapper = styled(Link)<{ $reverse: boolean }>`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  column-gap: 8px;
  direction: ${({ $reverse }) => ($reverse ? "rtl" : "ltr")};

  width: fit-content;
  transition: 0.3s ease-in-out;

  ${fonts.body}
  color: var(--primary);
  cursor: pointer;
`;

export const IconComp = styled(Icon)`
  height: 2em;
  width: 2em;
  padding: 4px;
`;
