import { FC } from "react";

import clsx from "clsx";
import { m } from "framer-motion";

import { useGlobalState } from "context/globalState";

import { LinearGradientVariants } from "./LinearGradient.animations";
import S from "./LinearGradient.module.scss";

export interface LinearGradientProps {
  className?: string;
}

const LinearGradient: FC<LinearGradientProps> = ({ className, ...rest }) => {
  const [isDarkMode] = useGlobalState("isDarkMode");

  return (
    <m.div
      {...rest}
      className={clsx(S.LinearGradientWrapper, className)}
      key={isDarkMode ? "gradientDark" : "gradientLight"}
      aria-hidden
      data-theme={isDarkMode ? "dark" : "light"}
      {...LinearGradientVariants}
    />
  );
};
export default LinearGradient;
