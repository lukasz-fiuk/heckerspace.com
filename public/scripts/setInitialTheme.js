if (window !== undefined) {
  window.onload = () => {
    const setInitialThemeAttribute = () => {
      const STORAGE_THEME_KEY = "usehooks-ts-dark-mode";
      let value;

      if (localStorage.getItem(STORAGE_THEME_KEY)) {
        value = localStorage.getItem(STORAGE_THEME_KEY);

        document.body.setAttribute(
          "data-theme",
          value === "true" ? "dark" : "light"
        );
      } else {
        value = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

        localStorage.setItem(
          STORAGE_THEME_KEY,
          value === "dark" ? "true" : "false"
        );

        document.body.setAttribute("data-theme", value);
      }
    };
    setInitialThemeAttribute();
  };
}
