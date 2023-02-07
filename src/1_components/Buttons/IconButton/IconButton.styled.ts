import Link from "next/link";
import styled, { css } from "styled-components";

import Icon from "1_components/Icon/Icon";
import { fonts } from "styled/fonts";

const buttonWrapperStyles = css<{ $reverse: boolean }>`
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

export const IconButtonWrapper = styled.button<{ $reverse: boolean }>`
  ${buttonWrapperStyles}
`;

export const IconLinkWrapper = styled(Link)<{ $reverse: boolean }>`
  ${buttonWrapperStyles}
`;

export const IconComp = styled(Icon)`
  height: 2em;
  width: 2em;
  padding: 4px;
`;
