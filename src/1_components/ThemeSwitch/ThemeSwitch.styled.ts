import styled from "styled-components";

import Sunbeams from "svg/themeSwitch/sunbeams.svg";

export const ToggleWrapper = styled.button`
  position: relative;
  display: grid;
  place-items: center;

  border-radius: 100%;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;

  & * {
    transition: transform 0.6s ease-in-out;

    @media (prefers-reduced-motion) {
      transition: none;
    }
  }
`;

export const Planet = styled.svg<{ $currentTheme: "light" | "dark" }>`
  position: absolute;
  inset: 0;

  z-index: 1;
  transform: ${({ $currentTheme }) =>
    $currentTheme === "light" ? "scale(1)" : "scale(0.5)"};
`;

export const Mask = styled.mask<{ $currentTheme: "light" | "dark" }>`
  & circle {
    transform: ${({ $currentTheme }) =>
      $currentTheme === "light"
        ? "translate(40%, -32%)"
        : "translate(100%, -100%)"};
  }
`;

export const SvgSunbeams = styled(Sunbeams)<{
  $currentTheme: "light" | "dark";
}>`
  position: absolute;
  inset: 0;
  transform: ${({ $currentTheme }) =>
    $currentTheme === "light" ? "scale(0)" : "scale(1) rotate(180deg)"};
`;
