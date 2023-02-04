import { m } from "framer-motion";
import styled from "styled-components";

import Logo from "1_components/Logo/Logo";
import ThemeSwitch from "1_components/ThemeSwitch/ThemeSwitch";
import { COMMONS } from "styled/commons";
import media from "styled/mediaQueries";
import { vh, zIndex } from "styled/mixins";

import NavLink from "../NavLink/NavLink";

export const MobileMenuWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zIndex("absoluteTop")};

  width: 100vw;
  height: ${vh(100)};
  overflow-y: scroll;
  pointer-events: none;

  ${media.desktop} {
    display: none;
  }
`;

export const BackgroundFader = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  inset: 0;

  opacity: ${({ $isOpen }) => ($isOpen ? 0.8 : 0)};
  transition: opacity 0.3s ease-in-out;
  background: var(--background);
  pointer-events: none;
  z-index: ${zIndex("aboveContent")};
`;

export const SvgLogo = styled(Logo)<{ $isOpen: boolean }>`
  position: fixed;
  z-index: ${zIndex("absoluteTop")};
  left: 50vw;
  transform: translateX(-50%);

  padding: 24px;
  height: clamp(60px, 9.6rem, 96px);

  transition: opacity ${COMMONS.defaultTransitionDuration}s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

export const SideMenu = styled(m.div)`
  position: absolute;
  inset: 0;
  z-index: ${zIndex("overlay")};
  display: grid;
  grid-template-rows: 1fr min-content;

  background: var(--background);
  pointer-events: all;
`;

export const NavigationLinks = styled.nav`
  display: grid;
  align-items: end;
  justify-items: left;
  text-align: left;

  padding: 40px 16px;

  & ul {
    text-align: left;
    display: grid;
    row-gap: 0.5em;
  }
`;

export const TogglesWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: left;
  grid-template-columns: 1fr auto;

  border-top: 1px solid;
  padding: 40px 16px;
  color: var(--primary);
  height: min-content;
`;

export const ThemeToggle = styled(ThemeSwitch)`
  width: 24px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
`;

export const NavLinkComp = styled(NavLink)`
  font-size: 24rem;
`;
