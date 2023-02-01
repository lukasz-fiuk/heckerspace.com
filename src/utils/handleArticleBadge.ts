const hasLocalStorage = typeof localStorage !== "undefined";

// store a badge for a blog post in local storage
export const storeArticleBadge = (id: string, badge: string) => {
  hasLocalStorage && localStorage.setItem(id, badge);
};

// get a badge for a specific blog post from local storage
export const getArticleBadge = (id: string): string => {
  return (hasLocalStorage && localStorage.getItem(id)) || "";
};
