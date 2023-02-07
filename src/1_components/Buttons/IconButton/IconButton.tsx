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
  onClick?: (e: any) => void;
  removeFocus?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  label,
  href = "",
  iconVariant,
  hoverDirection,
  reverse = false,
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
        <S.IconComp variant={iconVariant} />
      </HoverReplace>
    </>
  );

  return (
    <>
      {href === "" ? (
        <S.IconButtonWrapper
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onFocus={toggleHover}
          onBlur={toggleHover}
          $reverse={reverse}
          tabIndex={removeFocus ? -1 : 0}
          {...rest}
        >
          {content}
        </S.IconButtonWrapper>
      ) : (
        <S.IconLinkWrapper
          href={href}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onFocus={toggleHover}
          onBlur={toggleHover}
          $reverse={reverse}
          scroll={false}
          tabIndex={removeFocus ? -1 : 0}
          {...rest}
        >
          {content}
        </S.IconLinkWrapper>
      )}
    </>
  );
};
export default IconButton;
