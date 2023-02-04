import React, { FC } from "react";

import { useGlobalState } from "context/globalState";
import { GradientDirection } from "types/commonTypes";

import { LinearGradientVariants } from "./LinearGradient.animations";
import * as S from "./LinearGradient.styled";

export interface LinearGradientProps {
  fromColor: { light: string; dark: string };
  toColor: { light: string; dark: string };
  direction?: GradientDirection;
}

const LinearGradient: FC<LinearGradientProps> = ({
  fromColor,
  toColor,
  direction = "to bottom",
  ...rest
}) => {
  const [isDarkMode] = useGlobalState("isDarkMode");

  return (
    <S.LinearGradientWrapper
      key={isDarkMode ? "gradientDark" : "gradientLight"}
      data-theme={isDarkMode ? "dark" : "light"}
      $fromColor={fromColor}
      $toColor={toColor}
      $direction={direction}
      {...LinearGradientVariants}
      {...rest}
    />
  );
};
export default LinearGradient;
