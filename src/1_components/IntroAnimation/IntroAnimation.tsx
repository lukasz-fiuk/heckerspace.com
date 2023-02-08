import { FC } from "react";

import { useGlobalState } from "context/globalState";

import { IntroAnimationVariants } from "./IntroAnimation.animations";
import * as S from "./IntroAnimation.styled";

export interface IntroAnimationProps {}

const IntroAnimation: FC<IntroAnimationProps> = () => {
  const [isDarkMode] = useGlobalState("isDarkMode");
  return (
    <>
      <S.LoadingScreen
        aria-hidden
        {...IntroAnimationVariants.firstItem}
        transition={IntroAnimationVariants.transition}
        $isDarkMode={isDarkMode}
      />
      <S.LoadingScreen
        aria-hidden
        {...IntroAnimationVariants.secondItem}
        transition={IntroAnimationVariants.transition}
        $isDarkMode={isDarkMode}
      />
    </>
  );
};
export default IntroAnimation;
