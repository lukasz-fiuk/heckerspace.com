import React, { FC } from "react";

import { PALETTE } from "styled/theme";

import { data } from "./Header.data";
import * as S from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavLink from "./NavLink/NavLink";

export interface HeaderProps {}

const Header: FC<HeaderProps> = ({ ...rest }) => {
  const routes = data.navigationLinks.map(({ label, href }) => (
    <li key={label}>
      <NavLink label={label} href={href} />
    </li>
  ));

  return (
    <S.HeaderWrapper {...rest}>
      <MobileMenu />

      <S.Fader
        fromColor={{ light: PALETTE.white, dark: PALETTE.codGray }}
        toColor={{ light: PALETTE.transparent, dark: PALETTE.transparent }}
      />

      <S.SkipButton href="#main" title={data.skipButtonLabel} tabIndex={0}>
        {data.skipButtonLabel}
      </S.SkipButton>

      <S.ThemeToggle uniqueId="header_desktop" />

      <S.SvgLogo />

      <S.NavigationLinks aria-label="Navigation links">
        <ul>{routes}</ul>
      </S.NavigationLinks>
    </S.HeaderWrapper>
  );
};
export default Header;
