import { FC } from "react";

export interface CirclesProps {}

const Circles: FC<CirclesProps> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 345 196"
    >
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 98 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 180.094 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 114.419 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 196.513 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 130.838 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 212.932 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 148.283 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 230.377 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 164.702 98)"
      />
      <circle
        r="97.5"
        stroke="currentColor"
        stroke-opacity=".5"
        transform="matrix(1 0 0 -1 246.796 98)"
      />
    </svg>
  );
};
export default Circles;
