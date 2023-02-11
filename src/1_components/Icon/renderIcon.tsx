import SvgLogoMark from "svg/branding/logomark.svg";
import SvgLogoType from "svg/branding/logotype.svg";
import SvgArrowRight from "svg/icons/arrowRight.svg";
import SvgArrowUp from "svg/icons/arrowUp.svg";
import SvgClose from "svg/icons/close.svg";
import SvgGithubLogo from "svg/icons/githubLogo.svg";
import SvgStar from "svg/icons/star.svg";
import SvgTwitterLogo from "svg/icons/twitterLogo.svg";

import { IconVariant } from "./Icon";
import * as S from "./Icon.styled";

export const renderIcon = (variant: IconVariant) => {
  switch (variant) {
    case "twitter":
      return <SvgTwitterLogo />;

    case "github":
      return <SvgGithubLogo />;

    case "arrowUp":
      return <SvgArrowUp />;

    case "arrowDown":
      return <S.SvgArrowDown />;

    case "arrowLeft":
      return <S.SvgArrowLeft />;

    case "arrowRight":
      return <SvgArrowRight />;

    case "star":
      return <SvgStar />;

    case "close":
      return <SvgClose />;

    case "logoType":
      return <SvgLogoType />;

    case "logoMark":
      return <SvgLogoMark />;
  }
};
