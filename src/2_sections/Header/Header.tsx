import React, { FC } from "react";

import { useGlobalState } from "context/globalState";

import Fader from "./Fader/Fader";
import { data } from "./Header.data";
import * as S from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavLink from "./NavLink/NavLink";

export interface HeaderProps {}

const Header: FC<HeaderProps> = ({ ...rest }) => {
  const [isDarkMode] = useGlobalState("isDarkMode");

  const routes = data.navigationLinks.map(({ label, href }) => (
    <li key={label}>
      <NavLink label={label} href={href} />
    </li>
  ));

  return (
    <S.HeaderWrapper {...rest}>
      <MobileMenu />

      <Fader key={isDarkMode ? "darkGradient" : "lightGradient"} />

      <S.SkipButton href="#main" title={data.skipButtonLabel} tabIndex={0}>
        {data.skipButtonLabel}
      </S.SkipButton>

      <S.ThemeToggle />

      <S.SvgLogo />

      <S.NavigationLinks aria-label="Navigation links">
        <ul>{routes}</ul>
      </S.NavigationLinks>
    </S.HeaderWrapper>
  );
};
export default Header;
