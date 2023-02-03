import React, { FC } from "react";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import { IconVariant } from "1_components/Icon/Icon";

import { data } from "./SocialMedia.data";
import * as S from "./SocialMedia.styled";

export interface SocialMediaProps {
  iconSize?: number;
}

const SocialMedia: FC<SocialMediaProps> = ({ iconSize = 24, ...rest }) => {
  return (
    <S.SocialMediaWrapper
      aria-label="Social media SocialMediaWrapper"
      {...rest}
    >
      {data.socialMedia.map(({ href, title, ariaLabel, iconVariant }) => (
        <S.IconWrapper
          key={title}
          href={href}
          title={title}
          tabIndex={0}
          aria-label={ariaLabel}
          target="_blank"
        >
          <HoverReplace direction="up">
            <S.IconComp
              iconSize={iconSize}
              variant={iconVariant as IconVariant}
            />
          </HoverReplace>
        </S.IconWrapper>
      ))}
    </S.SocialMediaWrapper>
  );
};
export default SocialMedia;
