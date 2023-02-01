export const scrollToId = (id: string, margin: number = 0) => {
  const element = document.getElementById(id);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const currentPosition = window.pageYOffset;
    const targetPosition = elementPosition + currentPosition - margin;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
};
