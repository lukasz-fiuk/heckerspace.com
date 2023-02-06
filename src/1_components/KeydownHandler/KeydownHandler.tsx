import { useRouter } from "next/router";
import { useDarkMode, useEffectOnce } from "usehooks-ts";

import { setGlobalState } from "context/globalState";

const KeydownHandler = () => {
  const router = useRouter();
  const { toggle: toggleTheme } = useDarkMode();

  useEffectOnce(() => {
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
  });

  return null;
};

export default KeydownHandler;
