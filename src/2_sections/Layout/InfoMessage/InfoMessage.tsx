import { FC } from "react";

import clsx from "clsx";
import { m } from "framer-motion";
import { useTimeout } from "usehooks-ts";

import Icon from "1_components/Icon/Icon";
import Markdown from "1_components/Markdown/Markdown";
import { setGlobalState, useGlobalState } from "context/globalState";

import S from "./InfoMessage.module.scss";

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
      <div
        className={clsx(S.InfoMessageWrapper, isOpen && S.isOpen)}
        style={{ pointerEvents: isOpen ? "all" : "none" }}
        onClick={hideDialog}
        title="Hide Message"
        {...rest}
      >
        <m.dialog
          className={S.Message}
          open={isOpen}
          initial={{ x: "-50%", y: "150%" }}
          animate={{ y: isOpen ? "-50%" : "150%" }}
          transition={{
            duration: 0.4,
            delay: isOpen ? 0.4 : 0,
            ease: "easeInOut",
          }}
        >
          <button
            className={S.CloseButton}
            onClick={hideDialog}
            aria-label="Close info dialog"
            tabIndex={isOpen ? 0 : -1}
          >
            <Icon variant="close" />
          </button>
          <Markdown raw markdown={message} />
        </m.dialog>
      </div>
    </>
  );
};
export default InfoMessage;
