interface ScrollOptions {
  smooth?: boolean;
}

export const handleScrollTop = ({ smooth = true }: ScrollOptions = {}) => {
  window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
};
