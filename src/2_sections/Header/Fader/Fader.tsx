import React, { FC } from "react";

import { FaderVariants } from "./Fader.animations";
import * as S from "./Fader.styled";

export interface FaderProps {}

const Fader: FC<FaderProps> = ({ ...rest }) => {
  return <S.FaderWrapper {...FaderVariants} {...rest} />;
};
export default Fader;
