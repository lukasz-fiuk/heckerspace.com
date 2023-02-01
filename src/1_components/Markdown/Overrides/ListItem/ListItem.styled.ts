import styled from "styled-components";

import Icon from "1_components/Icon/Icon";

export const ListItemWrapper = styled.li`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;

  & p {
    display: inline;
  }
`;

export const ArrowRight = styled(Icon)`
  align-self: top;

  height: 1em;
  width: 2em;

  transform: translateY(50%);
`;
