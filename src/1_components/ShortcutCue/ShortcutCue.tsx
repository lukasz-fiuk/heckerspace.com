import React, { FC } from "react";

import { useGlobalState } from "context/globalState";

import * as S from "./ShortcutCue.styled";

export interface ShortcutCueProps {
  text: string;
}

const ShortcutCue: FC<ShortcutCueProps> = ({ text, ...rest }) => {
  const [showKeyBinds] = useGlobalState("showKeyBinds");
  return (
    <S.ShortcutCueWrapper animate={{ opacity: showKeyBinds ? 1 : 0 }} {...rest}>
      {text}
    </S.ShortcutCueWrapper>
  );
};
export default ShortcutCue;
