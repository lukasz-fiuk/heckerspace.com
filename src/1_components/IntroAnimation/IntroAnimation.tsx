import { FC, useState } from "react";

import { useGlobalState } from "context/globalState";

import { IntroAnimationVariants } from "./IntroAnimation.animations";
import * as S from "./IntroAnimation.styled";

export interface IntroAnimationProps {}

const IntroAnimation: FC<IntroAnimationProps> = () => {
  const [isDarkMode] = useGlobalState("isDarkMode");
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <>
          <S.LoadingScreen
            aria-hidden
            {...IntroAnimationVariants.firstItem}
            transition={IntroAnimationVariants.transition}
            $isDarkMode={isDarkMode}
            onAnimationComplete={() => setIsVisible(false)}
          />
          <S.LoadingScreen
            aria-hidden
            {...IntroAnimationVariants.secondItem}
            transition={IntroAnimationVariants.transition}
            $isDarkMode={isDarkMode}
            onAnimationComplete={() => setIsVisible(false)}
          />
        </>
      )}
    </>
  );
};
export default IntroAnimation;
