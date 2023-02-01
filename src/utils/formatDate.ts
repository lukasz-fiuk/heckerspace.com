export const formatDate = (initialDate: string) => {
  const date = new Date(initialDate);
  const formattedDate = date
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(",", "");

  return formattedDate;
};
