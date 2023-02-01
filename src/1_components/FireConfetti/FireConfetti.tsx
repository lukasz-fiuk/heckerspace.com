import React, { useCallback, useRef } from "react";

interface FireConfettiProps {
  children: React.ReactNode;
  particleCount?: number;
  ticks?: number;
  spread?: number;
  startVelocity?: number;
  disableForReducedMotion?: boolean;
}

const FireConfetti: React.FC<FireConfettiProps> = ({
  children,
  particleCount = 50,
  ticks = 100,
  spread = 50,
  startVelocity = 25,
  disableForReducedMotion = true,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(async () => {
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

  return (
    <div ref={wrapperRef} onClick={handleClick}>
      {children}
    </div>
  );
};

export default FireConfetti;
