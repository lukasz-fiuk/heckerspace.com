import { FC, useEffect, useState } from "react";

import { useDarkMode } from "usehooks-ts";

import { setGlobalState } from "context/globalState";
import { ThemeVariants } from "types/commonTypes";

import * as S from "./ThemeSwitch.styled";

export interface ThemeSwitchProps {
  uniqueId: string;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ uniqueId, ...rest }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariants>("dark");
  const { toggle, isDarkMode } = useDarkMode();

  useEffect(() => {
    setCurrentTheme(isDarkMode ? "dark" : "light");
    document.body.setAttribute("data-theme", currentTheme);
    setGlobalState("isDarkMode", isDarkMode);
  }, [isDarkMode, currentTheme]);

  return (
    <S.ToggleWrapper
      onClick={toggle}
      title="Toggles light & dark theme"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
      {...rest}
    >
      <S.Planet
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        $currentTheme={currentTheme}
      >
        <circle
          mask={`url(#moon-mask-${uniqueId})`}
          cx="12"
          cy="12"
          r="12"
          fill="currentColor"
        />

        <S.Mask id={`moon-mask-${uniqueId}`} $currentTheme={currentTheme}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="12" cy="12" r="12" fill="black" />
        </S.Mask>
      </S.Planet>

      <S.SvgSunbeams $currentTheme={currentTheme} />
    </S.ToggleWrapper>
  );
};
export default ThemeSwitch;
