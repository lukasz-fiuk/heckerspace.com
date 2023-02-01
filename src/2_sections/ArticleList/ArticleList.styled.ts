import styled from "styled-components";

import AnimatedUnderline from "1_components/AnimatedLine/AnimatedLine";
import IconButton from "1_components/Buttons/IconButton/IconButton";
import Icon from "1_components/Icon/Icon";
import RevealItem from "1_components/RevealItem/RevealItem";
import { fonts } from "styled/fonts";

export const Articles = styled.section`
  display: grid;

  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  ${fonts.h1}
  font-weight: bold;

  padding-bottom: 0.25em;
`;

export const Arrow = styled(Icon)`
  height: 1em;
  color: var(--primary_50);
`;

export const RevealWrapper = styled(RevealItem)`
  justify-self: center;
  margin: 24px 0;
`;

export const ArrowButton = styled(IconButton)`
  cursor: pointer;
`;

export const Underline = styled(AnimatedUnderline)`
  position: absolute;
  inset: auto 0 0 0;

  height: 4px;
  background: var(--primary);
  transition: background 0.4s ease-in-out;
`;

export const ListWrapper = styled.ul`
  & > * {
    transition: opacity 0.3s ease-in-out;
  }

  &:hover > *,
  :focus-visible > * {
    opacity: 0.4;
  }

  &:hover > :hover,
  :focus-visible {
    opacity: 1;
  }
`;
