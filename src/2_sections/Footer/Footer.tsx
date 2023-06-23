import { FC } from "react";

import { m } from "framer-motion";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import Icon from "1_components/Icon/Icon";
import Logo from "1_components/Logo/Logo";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import SocialMedia from "2_sections/SocialMedia/SocialMedia";
import { COMMONS } from "styled/commons";
import { handleScrollTop } from "utils/handleScrollTop";

import { data } from "./Footer.data";
import S from "./Footer.module.scss";

export interface FooterProps {}

const Footer: FC<FooterProps> = ({ ...rest }) => {
  return (
    <FadeInOut
      className={S.FooterWrapper}
      renderAs={m["footer"]}
      aria-label="Main footer"
      duration={COMMONS.defaultTransitionDuration}
      {...rest}
    >
      <SocialMedia className={S.SocialLinks} iconSize={24} />
      <small className={S.Copyright}>{data.copyright}</small>
      <Logo className={S.HeckerspaceLogo} variant="logoMark" />

      <button
        className={S.ScrollTopButton}
        aria-label="Scroll to top"
        onClick={() => handleScrollTop()}
      >
        <HoverReplace direction="up">
          <Icon className={S.ArrowIcon} variant="arrowUp" />
        </HoverReplace>
      </button>

      <span className={S.Version}>version: 1.0</span>
    </FadeInOut>
  );
};

export default Footer;
