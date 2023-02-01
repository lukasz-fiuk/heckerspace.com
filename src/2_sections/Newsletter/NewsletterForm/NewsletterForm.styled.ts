import styled from "styled-components";

import { fonts } from "styled/fonts";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr min-content;
  column-gap: 16px;
  width: 100%;
  max-width: 800px;
  z-index: 10000;
`;

export const Input = styled.input`
  background-color: #2c2c2c;
  border-radius: 8px;
  height: 56px;
`;

export const Label = styled.label`
  font-size: 1.5em;
  margin: 0.5em;
`;

export const Button = styled.button`
  height: 100%;
  padding: 0 1em;
  border-radius: 8px;
  border: 1px solid;
  cursor: pointer;

  ${fonts.body}
  font-weight: bold;
  text-transform: lowercase;
  z-index: 100001;
`;

export const AgreementWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: min-content 1fr;
  column-gap: 16px;

  ${fonts.small}
  padding: 1em 0;
`;

export const Checkbox = styled.input`
  max-height: 24px;
  aspect-ratio: 1;
  background-color: #2c2c2c;
  border-radius: 8px;
  width: 24px;
  height: 24px;
`;
