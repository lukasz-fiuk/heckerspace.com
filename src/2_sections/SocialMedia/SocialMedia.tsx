import { FC } from "react";

import clsx from "clsx";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import { IconVariant } from "1_components/Icon/Icon";

import { data } from "./SocialMedia.data";
import * as S from "./SocialMedia.styled";

export interface SocialMediaProps {
  iconSize?: number;
  className?: string;
}

const SocialMedia: FC<SocialMediaProps> = ({
  iconSize = 24,
  className,
  ...rest
}) => {
  return (
    <S.SocialMediaWrapper
      {...rest}
      aria-label="Explore our social medias"
      className={clsx(className)}
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
