import { m } from "framer-motion";
import styled from "styled-components";

import { linearGradient } from "styled/mixins";
import { GradientDirection } from "types/commonTypes";

interface LinearGradientProps {
  $fromColor: { light: string; dark: string };
  $toColor: { light: string; dark: string };
  $direction: GradientDirection;
}

export const LinearGradientWrapper = styled(m.div)<LinearGradientProps>`
  &[data-theme="light"] {
    background: ${({ $direction, $fromColor, $toColor }) =>
      linearGradient($fromColor.light, $toColor.light, $direction)};
  }

  &[data-theme="dark"] {
    background: ${({ $direction, $fromColor, $toColor }) =>
      linearGradient($fromColor.dark, $toColor.dark, $direction)};
  }
`;
