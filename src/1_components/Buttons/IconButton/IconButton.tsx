import React, { FC, useState } from "react";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import { IconVariant } from "1_components/Icon/Icon";
import { Directions } from "types/commonTypes";

import * as S from "./IconButton.styled";

export interface IconButtonProps {
  label?: string;
  href?: string;
  reverse?: boolean;

  iconVariant: IconVariant;
  hoverDirection: Directions;
  onClick?: (e: MouseEvent) => void;
}

const IconButton: FC<IconButtonProps> = ({
  label,
  href = "/",
  iconVariant,
  hoverDirection,
  reverse = false,
  ...rest
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const toggleHover = () => setIsHovering(!isHovering);

  return (
    <S.IconButtonWrapper
      href={href}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      $reverse={reverse}
      scroll={false}
      {...rest}
    >
      {label}

      <HoverReplace
        isHovering={isHovering}
        disableInnerHover
        direction={hoverDirection}
      >
        <S.IconComp variant={iconVariant} />
      </HoverReplace>
    </S.IconButtonWrapper>
  );
};
export default IconButton;
