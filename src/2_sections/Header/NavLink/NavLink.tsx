import { FC, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";

import * as S from "./NavLink.styled";

export interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ label, href, ...rest }) => {
  const [isHovering, setIsHovering] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
  const isActive = currentRoute === href;

  const enableHover = () => setIsHovering(true);
  const disableHover = () => setIsHovering(false);

  return (
    <S.NavLinkWrapper
      key={label}
      href={href}
      tabIndex={0}
      scroll={false}
      $isActive={isActive}
      onMouseOver={enableHover}
      onMouseLeave={disableHover}
      onFocus={enableHover}
      onBlur={disableHover}
      {...rest}
    >
      <HoverReplace direction="up" disableInnerHover isHovering={isHovering}>
        {label}
      </HoverReplace>

      <AnimatePresence>
        {isActive && (
          <S.IconWrapper direction="right" duration={0.3}>
            <HoverReplace
              direction="up"
              disableInnerHover
              isHovering={isHovering}
            >
              <S.StarIcon variant="star" />
            </HoverReplace>
          </S.IconWrapper>
        )}
      </AnimatePresence>
    </S.NavLinkWrapper>
  );
};
export default NavLink;
