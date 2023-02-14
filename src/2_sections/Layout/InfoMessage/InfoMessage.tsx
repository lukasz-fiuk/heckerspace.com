import { FC } from "react";

import { useTimeout } from "usehooks-ts";

import Icon from "1_components/Icon/Icon";
import Markdown from "1_components/Markdown/Markdown";
import { setGlobalState, useGlobalState } from "context/globalState";

import * as S from "./InfoMessage.styled";

export interface InfoMessageProps {}

const InfoMessage: FC<InfoMessageProps> = ({ ...rest }) => {
  const DELAY_IN_SECONDS = 1.2;
  const [isOpen] = useGlobalState("showInfoDialog");

  const showDialog = () => {
    setGlobalState("showKeyBinds", true);
    setGlobalState("showInfoDialog", true);
  };

  const hideDialog = () => {
    setGlobalState("showKeyBinds", false);
    setGlobalState("showInfoDialog", false);
  };

  useTimeout(() => {
    showDialog();
  }, DELAY_IN_SECONDS * 1000);

  const message = `This website supports keyboard navigation. 👻 <br/>
  Press *\`Tab\`* to show visual cues 💡
  `;

  return (
    <>
      <S.InfoMessageWrapper
        style={{ pointerEvents: isOpen ? "all" : "none" }}
        isOpen={isOpen}
        onClick={hideDialog}
        title="Hide Message"
        {...rest}
      >
        <S.Message
          open={isOpen}
          initial={{ x: "-50%", y: "150%" }}
          animate={{ y: isOpen ? "-50%" : "150%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <S.CloseButton onClick={hideDialog} tabIndex={isOpen ? 0 : -1}>
            <Icon variant="close" />
          </S.CloseButton>
          <Markdown raw markdown={message} />
        </S.Message>
      </S.InfoMessageWrapper>
    </>
  );
};
export default InfoMessage;
