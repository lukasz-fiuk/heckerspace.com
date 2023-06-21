import { FC, useCallback, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { useCopyToClipboard } from "usehooks-ts";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import useConfetti from "hooks/useConfetii";

import S from "./CopyButton.module.scss";

export interface CopyButtonProps {
  valueToCopy?: string;
  defaultText?: string;
  copiedText?: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy = "",
  defaultText = "copy link 🔗",
  copiedText = "copied! 🎉",
  ...rest
}) => {
  const [copiedValue, onCopy] = useCopyToClipboard();
  const [internalValueToCopy, setInternalValueToCopy] =
    useState<string>(valueToCopy);

  const { ref: buttonRef, fireConfetti } = useConfetti();

  /////////////////////////////////////
  // If valueToCopy is empty string, copy current URL
  /////////////////////////////////////

  useEffect(() => {
    if (!valueToCopy) {
      setInternalValueToCopy(window.location.href);
    }
  }, [valueToCopy]);

  const handleCopy = useCallback(() => {
    onCopy(internalValueToCopy);
    fireConfetti();
    const resetTimeout = setTimeout(() => onCopy(""), 2000);

    return () => {
      clearTimeout(resetTimeout);
    };
  }, [internalValueToCopy, onCopy, fireConfetti]);

  return (
    <button
      className={S.CopyButtonWrapper}
      ref={buttonRef}
      aria-label="Copy to clipboard"
      tabIndex={0}
      onClick={handleCopy}
      {...rest}
    >
      <HoverReplace direction="up">
        <AnimatePresence mode="wait">
          <FadeInOut key={copiedValue} duration={0.2}>
            {copiedValue ? copiedText : defaultText}
          </FadeInOut>
        </AnimatePresence>
      </HoverReplace>

      {/* Accessibility feature to announce that text have been copied */}
      <div
        role="status"
        aria-live="polite"
        aria-hidden={!copiedValue}
        className="hidden"
      >
        {copiedValue ? copiedText : defaultText}
      </div>
    </button>
  );
};
export default CopyButton;
