import { FC, useState } from "react";

import { m } from "framer-motion";

import { useGlobalState } from "context/globalState";

import { IntroAnimationVariants } from "./IntroAnimation.animations";
import S from "./IntroAnimation.module.scss";

export interface IntroAnimationProps {}

const IntroAnimation: FC<IntroAnimationProps> = () => {
  const [isDarkMode] = useGlobalState("isDarkMode");
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && (
        <>
          <m.div
            aria-hidden
            className={S.LoadingScreen}
            data-theme={isDarkMode ? "dark" : "light"}
            {...IntroAnimationVariants.firstItem}
            transition={IntroAnimationVariants.transition}
            onAnimationComplete={() => setIsVisible(false)}
          />
          <m.div
            aria-hidden
            className={S.LoadingScreen}
            data-theme={isDarkMode ? "dark" : "light"}
            {...IntroAnimationVariants.secondItem}
            transition={IntroAnimationVariants.transition}
            onAnimationComplete={() => setIsVisible(false)}
          />
        </>
      )}
    </>
  );
};
export default IntroAnimation;
