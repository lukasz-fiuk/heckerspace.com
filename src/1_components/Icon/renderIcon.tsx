import Logomark from "1_components/Svgs/branding/Logomark";
import Logotype from "1_components/Svgs/branding/Logotype";
import ArrowRight from "1_components/Svgs/icons/ArrowRight";
import ArrowUp from "1_components/Svgs/icons/ArrowUp";
import Close from "1_components/Svgs/icons/Close";
import GithubLogo from "1_components/Svgs/icons/GithubLogo";
import Star from "1_components/Svgs/icons/Star";
import TwitterLogo from "1_components/Svgs/icons/TwitterLogo";

import { IconVariant } from "./Icon";

export const renderIcon = (variant: IconVariant) => {
  switch (variant) {
    case "twitter":
      return <TwitterLogo />;

    case "github":
      return <GithubLogo />;

    case "arrowUp":
      return <ArrowUp />;

    case "arrowDown":
      return <ArrowUp />;

    case "arrowLeft":
      return <ArrowRight />;

    case "arrowRight":
      return <ArrowRight />;

    case "star":
      return <Star />;

    case "close":
      return <Close />;

    case "logoType":
      return <Logotype />;

    case "logoMark":
      return <Logomark />;
  }
};
