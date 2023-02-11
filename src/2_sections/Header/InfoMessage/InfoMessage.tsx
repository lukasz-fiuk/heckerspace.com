import { FC, useState } from "react";

import { useTimeout } from "usehooks-ts";

import Icon from "1_components/Icon/Icon";
import Markdown from "1_components/Markdown/Markdown";
import { setGlobalState } from "context/globalState";

import * as S from "./InfoMessage.styled";

export interface InfoMessageProps {}

const InfoMessage: FC<InfoMessageProps> = ({ ...rest }) => {
  const DELAY_IN_SECONDS = 3;

  const [isOpen, setIsOpen] = useState(false);

  const showDialog = () => {
    setGlobalState("showKeyBinds", true);
    setIsOpen(true);
  };

  const hideDialog = () => {
    setGlobalState("showKeyBinds", false);
    setIsOpen(false);
  };

  useTimeout(() => {
    showDialog();
  }, DELAY_IN_SECONDS * 1000);

  const message = `This website supports keyboard navigation. 👻 <br/>
  Press \`Tab\` to show visual cues 💡
  `;

  return (
    <>
      <S.Shader
        animate={{ opacity: isOpen ? 0.75 : 0 }}
        style={{ pointerEvents: isOpen ? "all" : "none" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={hideDialog}
        title="Hide Message"
      />
      <S.InfoMessageWrapper
        onKeyDown={(e) => e.code === "Escape" && hideDialog}
        open={isOpen}
        initial={{ x: "-50%", y: "150%" }}
        animate={{ y: isOpen ? "-50%" : "150%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        {...rest}
      >
        <S.CloseButton onClick={hideDialog}>
          <Icon variant="close" />
        </S.CloseButton>
        <Markdown raw markdown={message} />
      </S.InfoMessageWrapper>
    </>
  );
};
export default InfoMessage;
