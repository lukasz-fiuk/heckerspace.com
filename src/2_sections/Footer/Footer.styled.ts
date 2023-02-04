import styled from "styled-components";

import Icon from "1_components/Icon/Icon";
import Logo from "1_components/Logo/Logo";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import SocialMedia from "2_sections/SocialMedia/SocialMedia";
import { COMMONS } from "styled/commons";
import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";

export const FooterWrapper = styled(FadeInOut)`
  display: grid;
  place-items: center;
  position: relative;
  margin: 0 auto;
  max-width: calc(100vw - 32px);

  height: ${COMMONS.footerHeight.mobile}px;

  ${media.desktop} {
    max-width: 90vw;
    height: ${COMMONS.footerHeight.desktop}px;
  }
`;

export const Copyright = styled.small`
  position: absolute;
  bottom: 16px;

  ${fonts.small}
  font-weight: 400;
  color: var(--secondary);
`;

export const HeckerspaceLogo = styled(Logo)`
  display: none;

  ${media.desktop} {
    display: block;
    height: clamp(24px, 3.2rem, 40px);
  }
`;

export const ScrollTopButton = styled.button`
  appearance: none;
  position: absolute;
  right: 0;
  overflow: hidden;

  width: 48px;
  padding: 8px;
  margin: -8px;
  cursor: pointer;
  color: var(--primary);
  opacity: 0.5;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const ArrowIcon = styled(Icon)`
  padding: 8px 0;
`;

export const SocialLinks = styled(SocialMedia)`
  position: absolute;

  ${media.desktop} {
    left: 0;
  }
`;

export const Version = styled.span`
  position: absolute;
  left: 0;
  bottom: 16px;

  ${fonts.small}
  color: var(--secondary);
`;
