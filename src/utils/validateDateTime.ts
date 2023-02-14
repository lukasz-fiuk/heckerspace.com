export const validateDateTime = (dateString: string) => {
  let date = new Date(dateString);
  return date.toISOString().slice(0, -1) + "+00:00";
};
