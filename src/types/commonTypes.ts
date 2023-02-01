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
