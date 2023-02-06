import React, { FC } from "react";

import Markdown from "1_components/Markdown/Markdown";

import * as S from "./Hero.styled";

export interface HeroProps {
  title: string;
}

const Hero: FC<HeroProps> = ({ title, ...rest }) => {
  return (
    <S.HeroWrapper {...rest}>
      <S.HeadingWrapper>
        <S.SvgCircles alt="Decorative circles pattern" />

        <S.Title>
          <Markdown markdown={title} raw />
        </S.Title>
      </S.HeadingWrapper>
    </S.HeroWrapper>
  );
};
export default Hero;
