import { FC, useEffect, useState } from "react";

import clsx from "clsx";
import { m } from "framer-motion";
import { usePathname } from "next/navigation";

import Logo from "1_components/Logo/Logo";
import ThemeSwitch from "1_components/ThemeSwitch/ThemeSwitch";
import useDisableScroll from "hooks/useDisableScroll";
import { COMMONS } from "styled/commons";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { data } from "../Header.data";
import NavLink from "../NavLink/NavLink";

import S from "./MobileMenu.module.scss";

export interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = ({ ...rest }) => {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useDisableScroll(isOpen);

  const { navigationLinks, menu } = data;

  const routes = navigationLinks.map(({ label, href }) => (
    <li key={label}>
      <NavLink className={S.NavLinkComp} label={label} href={href} />
    </li>
  ));

  return (
    <div className={S.MobileMenuWrapper} {...rest}>
      <div className={clsx(S.BackgroundFader, isOpen && S.isOpen)} />
      <Logo className={clsx(S.SvgLogo, isOpen && S.isOpen)} />

      <m.div
        className={S.SideMenu}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{
          duration: COMMONS.defaultTransitionDuration,
          ease: "easeInOut",
        }}
      >
        <nav className={S.NavigationLinks}>
          <ul>{routes}</ul>
        </nav>

        <div className={S.TogglesWrapper}>
          <button className={S.CloseButton} onClick={() => setIsOpen(false)}>
            {menu.close}
          </button>

          <ThemeSwitch className={S.ThemeToggle} uniqueId="menu_mobile" />
        </div>
      </m.div>

      <HamburgerButton setIsOpen={setIsOpen} />
    </div>
  );
};
export default MobileMenu;
