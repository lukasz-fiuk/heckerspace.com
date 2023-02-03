import { useRef, useEffect, useCallback } from "react";

/////////////////////////////////////
// Please note - this effect should be triggered from button elements
/////////////////////////////////////

/*

### Usage ###

const MyComponent = () => {
  const { ref: buttonRef, fireConfetti } = useConfetti();

return <button ref={buttonRef}> click me </button> 
  ...
}

*/

interface UseConfettiProps {
  particleCount?: number;
  ticks?: number;
  spread?: number;
  startVelocity?: number;
  disableForReducedMotion?: boolean;
}

const useConfetti = ({
  particleCount = 50,
  ticks = 100,
  spread = 50,
  startVelocity = 25,
  disableForReducedMotion = true,
}: UseConfettiProps = {}) => {
  const wrapperRef = useRef<HTMLButtonElement>(null);

  const fireConfetti = useCallback(async () => {
    if (wrapperRef.current) {
      const confetti = await import("canvas-confetti");
      const { top, left, width, height } =
        wrapperRef.current.getBoundingClientRect();
      confetti.default({
        particleCount,
        ticks,
        spread,
        startVelocity,
        disableForReducedMotion,
        origin: {
          x: (left + width / 2) / window.innerWidth,
          y: (top + height) / window.innerHeight,
        },
      });
    }
  }, [particleCount, ticks, spread, startVelocity, disableForReducedMotion]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        wrapperRef.current === document.activeElement
      ) {
        fireConfetti();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [fireConfetti]);

  return {
    ref: wrapperRef,
    fireConfetti,
  };
};

export default useConfetti;
