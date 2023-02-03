import { useState, useEffect } from "react";

/*

### Usage ###

const MyComponent = () => {
const id = useUniqueId()

return <Component key={id}

  ...
}

*/

const useUniqueId = (): string => {
  const [idx, setIdx] = useState<number>(0);

  useEffect(() => {
    setIdx(Math.random());
  }, []);

  return idx.toString();
};

export default useUniqueId;
