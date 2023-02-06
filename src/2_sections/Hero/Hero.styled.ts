import styled from "styled-components";

import { COMMONS } from "styled/commons";
import { fonts } from "styled/fonts";
import { vh } from "styled/mixins";
import Circles from "svg/hero/circles.svg";

export const HeroWrapper = styled.section`
  display: grid;
  place-items: center;

  max-height: 100vh;
  min-height: 100vh;
  height: ${vh(100)};
`;

export const HeadingWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  gap: 1em;

  width: clamp(196px, 20vw, 400px);
  transform: translateY(-1em);
`;

export const SvgCircles = styled(Circles)`
  color: var(--primary_50);
  transition: color 0.3s ease-in-out;
`;

export const Title = styled.h1`
  position: absolute;
  bottom: 0;

  transform: translateY(150%);
  width: calc(100vw - 32px); // 32px = left + right padding on mobile
  max-width: ${COMMONS.maxWidth / 2};

  ${fonts.h3}
  font-weight: normal;
  text-align: center;
`;
