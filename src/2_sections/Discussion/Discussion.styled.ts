import { m } from "framer-motion";
import styled from "styled-components";

import AnimatedLine from "1_components/AnimatedLine/AnimatedLine";
import { fonts } from "styled/fonts";

export const DiscussionWrapper = styled.section`
  display: grid;
  place-items: center;
  row-gap: 120px;

  padding-bottom: 120px;
`;

export const Divider = styled(AnimatedLine)`
  width: 100%;
  height: 1px;
  background: var(--secondary);
`;

export const Title = styled.h2`
  ${fonts.h2}
  font-weight: bold;
`;
