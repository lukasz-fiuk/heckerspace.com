export const vh = (value: number) => {
  return `calc(var(--vh) * ${value})`;
};

export const zIndex = (
  id: "aboveContent" | "overlay" | "header" | "absoluteTop"
) => {
  const order = ["", "aboveContent", "overlay", "header", "absoluteTop"];
  return order.indexOf(id) * 100;
};

type GradientDirection =
  | "to right"
  | "to left"
  | "to top"
  | "to bottom"
  | "to top right"
  | "to top left"
  | "to bottom right"
  | "to bottom left";

export const linearGradient = (
  fromColor: string,
  toColor: string,
  direction: GradientDirection = "to bottom"
) => `
  linear-gradient(${direction}, ${fromColor}, ${toColor});
`;
