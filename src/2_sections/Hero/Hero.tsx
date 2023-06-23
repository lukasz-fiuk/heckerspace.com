import { FC } from "react";

import Markdown from "1_components/Markdown/Markdown";
import Circles from "1_components/Svgs/hero/Circles";

import S from "./Hero.module.scss";

export interface HeroProps {
  title: string;
}

const Hero: FC<HeroProps> = ({ title, ...rest }) => {
  return (
    <section {...rest} className={S.HeroWrapper}>
      <div className={S.HeadingWrapper}>
        <Circles className={S.SvgCircles} aria-hidden />

        <h1 className={S.Title}>
          <Markdown markdown={title} raw />
        </h1>
      </div>
    </section>
  );
};
export default Hero;
