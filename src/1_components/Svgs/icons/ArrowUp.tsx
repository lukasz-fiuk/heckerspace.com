import { FC } from "react";

export interface ArrowUpProps {}

const ArrowUp: FC<ArrowUpProps> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 32 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 4.8854L16.5 46H15.5L15.5 4.8854C14.9138 6.5878 14.0443 8.36353 12.8141 9.98437C10.2754 13.3292 6.20763 16 0 16V15.0303C5.86094 15.0303 9.64077 12.5294 12.0087 9.40957C14.3928 6.26848 15.3519 2.5134 15.5 2.08273e-05L16.5 0C16.6481 2.51338 17.6072 6.26848 19.9913 9.40957C22.3592 12.5294 26.1391 15.0303 32 15.0303V16C25.7924 16 21.7246 13.3292 19.1859 9.98437C17.9557 8.36353 17.0862 6.5878 16.5 4.8854Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default ArrowUp;
