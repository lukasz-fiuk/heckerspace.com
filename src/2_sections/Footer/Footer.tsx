import { FC } from "react";

import { m } from "framer-motion";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import { COMMONS } from "styled/commons";
import { handleScrollTop } from "utils/handleScrollTop";

import { data } from "./Footer.data";
import * as S from "./Footer.styled";

export interface FooterProps {}

const Footer: FC<FooterProps> = ({ ...rest }) => {
  return (
    <S.FooterWrapper
      renderAs={m["footer"]}
      aria-label="Main footer"
      duration={COMMONS.defaultTransitionDuration}
      {...rest}
    >
      <S.SocialLinks iconSize={24} />
      <S.Copyright>{data.copyright}</S.Copyright>
      <S.HeckerspaceLogo variant="logoMark" />

      <S.ScrollTopButton
        aria-label="Scroll to top"
        onClick={() => handleScrollTop()}
      >
        <HoverReplace direction="up">
          <S.ArrowIcon variant="arrowUp" />
        </HoverReplace>
      </S.ScrollTopButton>

      <S.Version>stage: BETA</S.Version>
    </S.FooterWrapper>
  );
};

export default Footer;
