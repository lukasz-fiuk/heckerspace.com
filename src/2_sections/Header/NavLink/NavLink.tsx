import { FC, useState } from "react";

import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import Icon from "1_components/Icon/Icon";
import RevealItem from "1_components/RevealItem/RevealItem";

import S from "./NavLink.module.scss";

export interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ label, href, className, ...rest }) => {
  const [isHovering, setIsHovering] = useState(false);

  const currentRoute = usePathname();
  const isActive = currentRoute === href;

  const enableHover = () => setIsHovering(true);
  const disableHover = () => setIsHovering(false);

  return (
    <Link
      className={clsx(S.NavLinkWrapper, isActive && S.Active, className)}
      key={label}
      href={href}
      scroll={false}
      onMouseOver={enableHover}
      onMouseLeave={disableHover}
      onFocus={enableHover}
      onBlur={disableHover}
      aria-current={isActive ? "page" : "false"}
      {...rest}
    >
      <HoverReplace direction="up" disableInnerHover isHovering={isHovering}>
        {label}
      </HoverReplace>

      <AnimatePresence>
        {isActive && (
          <RevealItem
            className={S.IconWrapper}
            direction="right"
            duration={0.3}
          >
            <HoverReplace
              direction="up"
              disableInnerHover
              isHovering={isHovering}
            >
              <Icon className={S.StarIcon} variant="star" />
            </HoverReplace>
          </RevealItem>
        )}
      </AnimatePresence>
    </Link>
  );
};
export default NavLink;
