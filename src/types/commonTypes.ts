import { Variants } from "framer-motion";

export interface FramerVariants {
  [key: string]: Variants;
}

export type ThemeVariants = "light" | "dark";

export type Directions = "up" | "down" | "left" | "right";

export type Media = {
  url: string;
  width: number;
  height: number;
  fileName: string;
};

export type GradientDirection =
  | "to right"
  | "to left"
  | "to top"
  | "to bottom"
  | "to top right"
  | "to top left"
  | "to bottom right"
  | "to bottom left";
