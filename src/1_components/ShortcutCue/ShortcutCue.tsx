import { FC } from "react";

import { m } from "framer-motion";

import { useGlobalState } from "context/globalState";

import S from "./ShortcutCue.module.scss";

export interface ShortcutCueProps {
  text: string;
}

const ShortcutCue: FC<ShortcutCueProps> = ({ text, ...rest }) => {
  const [showKeyBinds] = useGlobalState("showKeyBinds");
  return (
    <m.kbd
      className={S.ShortcutCueWrapper}
      animate={{ opacity: showKeyBinds ? 1 : 0 }}
      {...rest}
    >
      {text}
    </m.kbd>
  );
};
export default ShortcutCue;
