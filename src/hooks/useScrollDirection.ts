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

const useScrollDirection = (threshold = 100): UseScrollDirectionResult => {
  const [direction, setDirection] = useState<Direction>("up");
  const previousScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDistance = Math.abs(
        currentScrollY - previousScrollYRef.current
      );
      const isAtDocumentBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight;
      const isAtDocumentTop = currentScrollY === 0;

      if (
        scrollDistance >= threshold &&
        !isAtDocumentBottom &&
        !isAtDocumentTop
      ) {
        if (currentScrollY > previousScrollYRef.current) {
          setDirection("down");
        } else {
          setDirection("up");
        }
        previousScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { direction, isUserScrollingUp: direction === "up" };
};

export default useScrollDirection;
