export const vh = (value: number) => {
  return `calc(var(--vh) * ${value})`;
};

export const zIndex = (
  id: "aboveContent" | "overlay" | "header" | "absoluteTop"
) => {
  const order = ["", "aboveContent", "overlay", "header", "absoluteTop"];
  return order.indexOf(id) * 100;
};
