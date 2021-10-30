import styled from 'styled-components';

interface InputContainerProps {
  hasError: boolean;
  maxWidth?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: ${(prop) => prop.maxWidth};

  label {
    font-family: var(--roboto-font-family);
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(prop) => (prop.hasError ? '#F02626' : '#929292')};
    margin-bottom: 0.313rem;
  }
  .error-message-container {
    position: relative;
    width: 100%;
    padding-top: 5px;
    span {
      position: absolute;
      font-family: var(--roboto-font-family);
      color: #f02626;
      font-size: 0.75rem;
    }
  }
`;
interface CustomInputProps {
  hasError: boolean;
}

export const CustomInput = styled.input<CustomInputProps>`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; */

  width: 100%;
  height: 2.5rem;
  border-radius: 0.375rem;

  border: solid 1px ${(prop) => (prop.hasError ? '#F02626' : '#CECECE')};
  padding-left: 5px;
  color: #606060;

  font-family: var(--roboto-font-family);
  font-style: italic;
  &:placeholder {
    font-family: var(--roboto-font-family);
    font-weight: 200;
    font-style: italic;
    color: #818181;
  }
`;