import { FC } from "react";

import { CSSProperties } from "styled-components";

import { useGlobalState } from "context/globalState";

import * as S from "./ShortcutCue.styled";

export interface ShortcutCueProps {
  text: string;
  style?: CSSProperties;
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
