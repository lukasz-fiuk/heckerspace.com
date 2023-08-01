import { FC } from "react";

import { m } from "framer-motion";

import LinearGradient from "1_components/LinearGradient/LinearGradient";
import Logo from "1_components/Logo/Logo";
import ShortcutCue from "1_components/ShortcutCue/ShortcutCue";
import { useGlobalState } from "context/globalState";

import { data } from "./Header.data";
import S from "./Header.module.scss";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavLink from "./NavLink/NavLink";

export interface HeaderProps {}

const Header: FC<HeaderProps> = ({ ...rest }) => {
  const [showKeyBinds] = useGlobalState("showKeyBinds");

  const routes = data.navigationLinks.map(({ label, href, keyBind }) => (
    <li key={label}>
      <div className={S.Row} style={{ justifyItems: "end" }}>
        <ShortcutCue text={keyBind} style={{ justifySelf: "left" }} />
        <NavLink label={label} href={href} />
      </div>
    </li>
  ));

  return (
    <>
      <header className={S.HeaderWrapper} {...rest}>
        <MobileMenu />

        <LinearGradient className={S.Fader} />

        <div className={S.ColumnLeft}>
          <div className={S.Row}>
            {/* <ThemeSwitch className={S.ThemeToggle} uniqueId="header_desktop" /> */}
            <ShortcutCue text="T" />
          </div>

          <m.aside
            className={S.VisualCuesWrapper}
            animate={{ opacity: showKeyBinds ? 1 : 0 }}
          >
            <div className={S.Row}>
              {data.hideVisualCues.label}
              <ShortcutCue text={data.hideVisualCues.keyBind} />
            </div>
          </m.aside>
        </div>

        <Logo className={S.SvgLogo} />

        <nav className={S.NavigationLinks} aria-label="Main navigation">
          <ul>{routes}</ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
