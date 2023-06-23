import { FC } from "react";

import IconButton from "1_components/Buttons/IconButton/IconButton";

import S from "./Error.module.scss";

export interface ErrorProps {}

const Error: FC<ErrorProps> = ({ ...rest }) => {
  return (
    <div className={S.ErrorPageWrapper} {...rest}>
      <div className={S.HeadingWrapper}>
        <h1 className={S.ErrorMessage}>Whoops, page not found 💀</h1>
        <IconButton
          href="/"
          iconVariant="arrowRight"
          hoverDirection="right"
          label="go home"
        />
      </div>
    </div>
  );
};
export default Error;
