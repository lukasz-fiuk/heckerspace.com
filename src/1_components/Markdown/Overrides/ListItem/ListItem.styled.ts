import styled from "styled-components";

import Icon from "1_components/Icon/Icon";

export const ListItemWrapper = styled.li`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content;

  width: fit-content;
`;

export const ArrowRight = styled(Icon)`
  height: 24px;
  width: 48px;

  transform: translateY(50%);
  padding-right: 1em;
`;

export const Content = styled.div``;
