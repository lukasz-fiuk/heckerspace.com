import { FC, ReactNode } from "react";

import { useDarkMode } from "usehooks-ts";

import S from "./AnchorTag.module.scss";

export interface AnchorTagProps {
  children: ReactNode;
  disableFocus?: boolean;
}

const AnchorTag: FC<AnchorTagProps> = ({ children, disableFocus, ...rest }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <a
      className={S.AnchorTagWrapper}
      tabIndex={disableFocus ? -1 : 0}
      target="_blank"
      data-theme={isDarkMode ? "dark" : "light"}
      {...rest}
    >
      {children}
    </a>
  );
};
export default AnchorTag;
