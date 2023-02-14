import styled from "styled-components";

export const AnchorTagWrapper = styled.a`
  color: var(--primary);
  text-decoration: underline;
  text-decoration-color: var(--secondary);
  text-underline-offset: 0.25rem;
  font-weight: 500;
  transition: 0.4s ease-in-out;

  &:hover,
  :focus-visible {
    &[data-theme="light"] {
      text-decoration-color: hotpink;
    }

    &[data-theme="dark"] {
      text-decoration-color: yellow;
    }
  }
`;
