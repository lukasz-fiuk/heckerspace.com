import { useEffect } from "react";

import { useRouter } from "next/router";
import { useDarkMode } from "usehooks-ts";

import { setGlobalState } from "context/globalState";
import { handleScrollTop } from "utils/handleScrollTop";

const KeydownHandler = () => {
  const router = useRouter();
  const { toggle: toggleTheme } = useDarkMode();

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Tab":
          setGlobalState("showKeyBinds", true);
          break;

        case "Enter":
          setGlobalState("showKeyBinds", false);
          break;

        case "Escape":
          setGlobalState("showKeyBinds", false);
          break;

        case "t":
          toggleTheme();
          break;

        case "u":
          handleScrollTop();
          break;

        case "h":
          router.push("/", undefined, { scroll: false });
          break;

        case "b":
          router.push("/articles", undefined, { scroll: false });
          break;

        case "a":
          router.push("/about", undefined, { scroll: false });
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
};

export default KeydownHandler;
