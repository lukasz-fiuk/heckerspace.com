import { GradientDirection } from "types/commonTypes";

export const vh = (value: number) => {
  return `calc(var(--vh) * ${value})`;
};

export const zIndex = (
  id: "aboveContent" | "overlay" | "header" | "absoluteTop"
) => {
  const order = ["", "aboveContent", "overlay", "header", "absoluteTop"];
  return order.indexOf(id) * 100;
};

export const linearGradient = (
  fromColor: string,
  toColor: string,
  direction: GradientDirection = "to bottom"
) => `
  linear-gradient(${direction}, ${fromColor}, ${toColor});
`;
