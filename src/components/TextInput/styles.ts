import styled, { css } from 'styled-components';

type WrapperProps = {
  shouldDecreaseLabelSize: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  padding: 0.45rem 1rem;
  box-shadow: ${({ theme }) => theme.shadows.default};
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};
  position: relative;
  transition: all 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  :focus-within {
    label {
      top: 5px;
      font: ${({ theme }) => theme.fonts.P3RegularRoboto};
    }
  }

  label {
    color: ${({ theme }) => theme.colors.gray};
    transition: all 0.2s;
    font: inherit;
    position: absolute;
    top: 30%;

    ${({ shouldDecreaseLabelSize, theme }) =>
      shouldDecreaseLabelSize &&
      css`
        top: 5px;
        font: ${theme.fonts.P3RegularRoboto};
      `}
  }

  input {
    margin-top: 1rem;
    border: none;
    font: inherit;
    display: block;
    width: 100%;
    outline: none;
  }
`;
