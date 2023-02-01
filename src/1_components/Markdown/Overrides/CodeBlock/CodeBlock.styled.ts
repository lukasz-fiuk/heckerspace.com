import styled from "styled-components";

import CopyButton from "1_components/Buttons/CopyButton/CopyButton";
import { fontFaces, fonts } from "styled/fonts";
import { PALETTE } from "styled/theme";

export const SyntaxHighlighterStyles = {
  background: "unset",
  padding: 16,
  margin: 0,
  border: "none",
  fontSize: "clamp(12px, 1.6rem, 16px)",
  lineHeight: 2,
};

export const CodeBlockWrapper = styled.section`
  position: relative;
  overflow: hidden;

  border-radius: 8px;
  margin: 2rem 0;
  padding-bottom: 16px;
  transition: background 0.3s ease-in-out;

  border: 1px solid #262626;
  background: #1d1d1d;

  // Removes styles specified by syntax highlighter theme
  & pre * {
    transition: unset;
    background: unset !important;
    border: unset;
  }
`;

export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;

  padding: 8px 16px;
  margin-bottom: 16px;

  ${fonts.small}
  font-weight: bold;
  color: ${PALETTE.white};

  background: #2f2f2f;
`;

export const CopyCode = styled(CopyButton)`
  font-weight: normal;
  font-family: ${fontFaces.helvetica};
  color: ${PALETTE.white};

  transition: 0.3s ease-in-out;
`;
