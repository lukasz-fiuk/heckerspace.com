import React, { FC, useEffect, useState } from "react";

import { useDarkMode } from "usehooks-ts";

import { setGlobalState } from "context/globalState";
import useUniqueId from "hooks/useUniqueId";
import { ThemeVariants } from "types/commonTypes";

import * as S from "./ThemeSwitch.styled";

export interface ThemeSwitchProps {}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ ...rest }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariants>("dark");
  const { toggle, isDarkMode } = useDarkMode();

  // Add unique ID to prevent id clashing
  const componentId = useUniqueId();

  useEffect(() => {
    setCurrentTheme(isDarkMode ? "dark" : "light");
    document.body.setAttribute("data-theme", currentTheme);
    setGlobalState("isDarkMode", isDarkMode);
  }, [isDarkMode, currentTheme]);

  return (
    <S.ToggleWrapper
      onClick={toggle}
      title="Toggles light & dark theme"
      aria-label={currentTheme}
      aria-live="polite"
      {...rest}
    >
      <S.Planet
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        $currentTheme={currentTheme}
      >
        <circle
          mask={`url(#moon-mask-${componentId})`}
          cx="12"
          cy="12"
          r="12"
          fill="currentColor"
        />

        <S.Mask id={`moon-mask-${componentId}`} $currentTheme={currentTheme}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="12" cy="12" r="12" fill="black" />
        </S.Mask>
      </S.Planet>

      <S.SvgSunbeams $currentTheme={currentTheme} />
    </S.ToggleWrapper>
  );
};
export default ThemeSwitch;
