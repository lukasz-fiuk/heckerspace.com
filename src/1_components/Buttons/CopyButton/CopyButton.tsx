import React, { FC, useCallback, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { useCopyToClipboard } from "usehooks-ts";

import FireConfetti from "1_components/FireConfetti/FireConfetti";
import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";

import * as S from "./CopyButton.styled";

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
    const resetTimeout = setTimeout(() => onCopy(""), 2000);

    return () => {
      clearTimeout(resetTimeout);
    };
  }, [internalValueToCopy, onCopy]);

  return (
    <S.CopyButtonWrapper
      aria-label="Copy to clipboard"
      tabIndex={0}
      onClick={handleCopy}
      onKeyPress={(e) => e.key === "Enter" && handleCopy()}
      {...rest}
    >
      <FireConfetti>
        <HoverReplace direction="up">
          <AnimatePresence mode="wait">
            <FadeInOut key={copiedValue} duration={0.2}>
              {copiedValue ? copiedText : defaultText}
            </FadeInOut>
          </AnimatePresence>
        </HoverReplace>
      </FireConfetti>

      {/* Accessibility feature to announce that text have been copied */}
      <div
        role="status"
        aria-live="polite"
        aria-hidden={!copiedValue}
        className="hidden"
      >
        {copiedValue ? copiedText : defaultText}
      </div>
    </S.CopyButtonWrapper>
  );
};
export default CopyButton;
