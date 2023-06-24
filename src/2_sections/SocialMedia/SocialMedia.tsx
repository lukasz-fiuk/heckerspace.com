import { FC } from "react";

import clsx from "clsx";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import Icon, { IconVariant } from "1_components/Icon/Icon";

import { data } from "./SocialMedia.data";
import S from "./SocialMedia.module.scss";

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
    <nav
      className={clsx(S.SocialMediaWrapper, className)}
      {...rest}
      aria-label="Explore our social medias"
    >
      {data.socialMedia.map(({ href, title, ariaLabel, iconVariant }) => (
        <a
          className={S.IconWrapper}
          key={title}
          href={href}
          title={title}
          tabIndex={0}
          aria-label={ariaLabel}
          target="_blank"
        >
          <HoverReplace direction="up">
            <Icon
              className={S.IconComp}
              style={{ width: iconSize }}
              variant={iconVariant as IconVariant}
            />
          </HoverReplace>
        </a>
      ))}
    </nav>
  );
};
export default SocialMedia;
