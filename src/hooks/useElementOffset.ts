import { useState, useEffect } from "react";

/*

### Usage ###

const MyComponent = () => {
  const elementRef = useRef<HTMLElement>(null);
  const { offsetY, offsetX } = useElementOffset(elementRef);

  ...

  return (
    <div ref={elementRef}/>
  )

*/

export const useElementOffset = (ref: React.RefObject<HTMLElement>) => {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setOffsetY(ref.current.offsetTop);
      setOffsetX(ref.current.offsetLeft);
    }
    const handleResize = () => {
      if (ref.current) {
        setOffsetY(ref.current.offsetTop);
        setOffsetX(ref.current.offsetLeft);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return { offsetY, offsetX };
};
