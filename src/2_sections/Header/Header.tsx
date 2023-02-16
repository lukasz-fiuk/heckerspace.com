import { FC } from "react";

import ShortcutCue from "1_components/ShortcutCue/ShortcutCue";
import { useGlobalState } from "context/globalState";
import { PALETTE } from "styled/palette";

import { data } from "./Header.data";
import * as S from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavLink from "./NavLink/NavLink";

export interface HeaderProps {}

const Header: FC<HeaderProps> = ({ ...rest }) => {
  const [showKeyBinds] = useGlobalState("showKeyBinds");

  const routes = data.navigationLinks.map(({ label, href, keyBind }) => (
    <li key={label}>
      <S.Row style={{ justifyItems: "end" }}>
        <ShortcutCue text={keyBind} style={{ justifySelf: "left" }} />
        <NavLink label={label} href={href} />
      </S.Row>
    </li>
  ));

  return (
    <>
      <S.HeaderWrapper {...rest}>
        <MobileMenu />

        <S.Fader
          fromColor={{ light: PALETTE.white, dark: PALETTE.codGray }}
          toColor={{ light: PALETTE.transparent, dark: PALETTE.transparent }}
        />

        <S.ColumnLeft>
          <S.Row>
            <S.ThemeToggle uniqueId="header_desktop" />
            <ShortcutCue text="T" />
          </S.Row>

          <S.VisualCuesWrapper animate={{ opacity: showKeyBinds ? 1 : 0 }}>
            <S.Row>
              {data.hideVisualCues.label}
              <ShortcutCue text={data.hideVisualCues.keyBind} />
            </S.Row>
          </S.VisualCuesWrapper>
        </S.ColumnLeft>

        <S.SvgLogo />

        <S.NavigationLinks aria-label="Main navigation">
          <ul>{routes}</ul>
        </S.NavigationLinks>
      </S.HeaderWrapper>
    </>
  );
};
export default Header;
