import { FC, useState } from "react";

import clsx from "clsx";
import Link from "next/link";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import Icon, { IconVariant } from "1_components/Icon/Icon";
import { Directions } from "types/commonTypes";

import S from "./IconButton.module.scss";

export interface IconButtonProps {
  label?: string;
  href?: string;
  reverse?: boolean;
  iconVariant: IconVariant;
  hoverDirection: Directions;
  onClick?: (e: any) => void;
  removeFocus?: boolean;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({
  label,
  href = "",
  iconVariant,
  hoverDirection,
  reverse = false,
  className,
  removeFocus,

  ...rest
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const toggleHover = () => setIsHovering(!isHovering);

  const content = (
    <>
      {label}

      <HoverReplace
        isHovering={isHovering}
        disableInnerHover
        direction={hoverDirection}
      >
        <Icon className={S.IconComp} variant={iconVariant} />
      </HoverReplace>
    </>
  );

  return (
    <>
      {href === "" ? (
        <button
          {...rest}
          className={clsx(S.ButtonWrapperStyles, className)}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onFocus={toggleHover}
          onBlur={toggleHover}
          tabIndex={removeFocus ? -1 : 0}
        >
          {content}
        </button>
      ) : (
        <Link
          {...rest}
          className={clsx(S.ButtonWrapperStyles, className)}
          href={href}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onFocus={toggleHover}
          onBlur={toggleHover}
          scroll={false}
          tabIndex={removeFocus ? -1 : 0}
        >
          {content}
        </Link>
      )}
    </>
  );
};
export default IconButton;
