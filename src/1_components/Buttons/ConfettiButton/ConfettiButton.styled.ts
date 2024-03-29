import styled from "styled-components";

export const ConfettiButtonWrapper = styled.button`
  cursor: pointer;
  color: var(--primary_75);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--primary);
  }
`;
