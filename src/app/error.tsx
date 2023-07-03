"use client";
import { FC } from "react";

export interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  return (
    <main>
      <h1>chuj, nie działa XDDDD</h1>
      <p>{error.message}</p>
      <button onClick={reset}>ALE MOŻNA Próbować XDDD</button>
    </main>
  );
};
export default error;
