import { useEffect, useRef, useState } from "react";

/*

### Usage ###

const MyComponent = () => {
const {direction,isUserScrollingUp} = useScrollDirection()

console.log(direction, isUserScrollingUp)

  ...
}

*/

type Direction = "up" | "down";

interface UseScrollDirectionResult {
  direction: Direction;
  isUserScrollingUp: boolean;
}

const useScrollDirection = (): UseScrollDirectionResult => {
  const [direction, setDirection] = useState<Direction>("up");
  const previousScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > previousScrollYRef.current) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      previousScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { direction, isUserScrollingUp: direction === "up" };
};

export default useScrollDirection;
