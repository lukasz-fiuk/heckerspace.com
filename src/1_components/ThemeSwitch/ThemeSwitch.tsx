"use client";
import { FC, useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { useDarkMode } from "usehooks-ts";

import Sunbeams from "1_components/Svgs/themeSwitch/Sunbeams";
import { setGlobalState } from "context/globalState";
import { ThemeVariants } from "types/commonTypes";

import S from "./ThemeSwitch.module.scss";

export interface ThemeSwitchProps {
  uniqueId: string;
  className?: string;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({
  uniqueId,
  className,
  ...rest
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariants>("dark");
  const { toggle, isDarkMode } = useDarkMode();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setCurrentTheme(isDarkMode ? "dark" : "light");
    document.body.setAttribute("data-theme", currentTheme);
    setGlobalState("isDarkMode", isDarkMode);

    // Setting aria label on the client to prevent SSR mismatch
    if (buttonRef.current) {
      buttonRef.current.setAttribute(
        "aria-label",
        `Switch to ${isDarkMode ? "light" : "dark"} theme`
      );
    }
  }, [isDarkMode, currentTheme]);

  return (
    <button
      {...rest}
      className={clsx(S.ToggleWrapper, className)}
      onClick={toggle}
      title="Toggles light & dark theme"
      ref={buttonRef}
    >
      <svg
        className={S.Planet}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-theme={currentTheme}
      >
        <circle
          mask={`url(#moon-mask-${uniqueId})`}
          cx="12"
          cy="12"
          r="12"
          fill="currentColor"
        />

        <mask
          data-theme={currentTheme}
          className={S.Mask}
          id={`moon-mask-${uniqueId}`}
        >
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="12" cy="12" r="12" fill="black" />
        </mask>
      </svg>

      <Sunbeams className={S.SvgSunbeams} data-theme={currentTheme} />
    </button>
  );
};
export default ThemeSwitch;
