import { FC } from "react";

export interface SunbeamsProps {}

const Sunbeams: FC<SunbeamsProps> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1ZM11 21a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2ZM19.071 3.515a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414ZM4.929 17.657a1 1 0 0 1 1.414 1.414L4.93 20.485a1 1 0 1 1-1.414-1.414l1.414-1.414ZM20.485 19.071a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414ZM6.343 4.929A1 1 0 0 1 4.93 6.343L3.515 4.929a1 1 0 0 1 1.414-1.415L6.343 4.93ZM23 11a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2ZM3 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h2Z"
      />
    </svg>
  );
};
export default Sunbeams;
