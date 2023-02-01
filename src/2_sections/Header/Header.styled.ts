import styled from "styled-components";

import Logo from "1_components/Logo/Logo";
import ThemeSwitch from "1_components/ThemeSwitch/ThemeSwitch";
import media from "styled/mediaQueries";

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;
  z-index: 100;

  width: 100%;
  padding-top: 24px;
`;

export const SkipButton = styled.a`
  position: absolute;
  bottom: 0;
  transform: translateY(-200px);

  :focus {
    transition: 0.3s ease-in-out;
    transform: translateY(80px);
  }
`;

export const SvgLogo = styled(Logo)`
  position: relative;
  height: clamp(60px, 9.6rem, 96px);
`;

export const ThemeToggle = styled(ThemeSwitch)`
  display: none;

  ${media.desktop} {
    display: grid;
    position: fixed;
    left: 5vw;
    width: 24px;
  }
`;

export const NavigationLinks = styled.nav`
  display: none;

  ${media.desktop} {
    position: fixed;
    right: 5vw;
    display: inline-block;

    margin-right: calc(-1em + 8px); // Shift icon outside
    text-align: right;

    & ul {
      display: grid;
      row-gap: 0.25em;
    }
  }
`;
