import { FC, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import useDisableScroll from "hooks/useDisableScroll";
import { COMMONS } from "styled/commons";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { data } from "../Header.data";

import * as S from "./MobileMenu.styled";

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
      <S.NavLinkComp label={label} href={href} />
    </li>
  ));

  return (
    <S.MobileMenuWrapper {...rest}>
      <S.BackgroundFader $isOpen={isOpen} />
      <S.SvgLogo $isOpen={isOpen} />

      <S.SideMenu
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{
          duration: COMMONS.defaultTransitionDuration,
          ease: "easeInOut",
        }}
      >
        <S.NavigationLinks>
          <ul>{routes}</ul>
        </S.NavigationLinks>

        <S.TogglesWrapper>
          <S.CloseButton onClick={() => setIsOpen(false)}>
            {menu.close}
          </S.CloseButton>

          <S.ThemeToggle uniqueId="menu_mobile" />
        </S.TogglesWrapper>
      </S.SideMenu>

      <HamburgerButton setIsOpen={setIsOpen} />
    </S.MobileMenuWrapper>
  );
};
export default MobileMenu;
