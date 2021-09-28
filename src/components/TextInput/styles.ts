import styled, { css } from 'styled-components';

type InputBoxProps = {
  hasErrors?: boolean;
  isSuccess?: boolean;
  userHasTyped?: boolean;
  shouldDecreaseLabelSize: boolean;
  isDisabled?: boolean;
};

export const Wrapper = styled.div`
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};

  span {
    display: block;
    margin-top: 0.35rem;
    color: ${({ theme }) => theme.colors.red};
  }

  p {
    margin-top: 0.35rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const InputBox = styled.div<InputBoxProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

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
    top: 28%;
    left: 1.35rem;

    ${({ shouldDecreaseLabelSize, theme }) =>
      shouldDecreaseLabelSize &&
      css`
        top: 5px;
        font: ${theme.fonts.P3RegularRoboto};
      `}
  }

  ${({ isDisabled, userHasTyped, theme }) =>
    !userHasTyped && isDisabled
      ? css`
          label {
            display: none;
          }
          ,
          input {
            background: ${theme.colors.black};
            pointer-events: none;
            cursor: auto;
            opacity: 0.24;
          }
        `
      : userHasTyped &&
        isDisabled &&
        css`
          label,
          input {
            opacity: 0.15;
            pointer-events: none;
            cursor: auto;
          }
        `}

  input {
    border: none;
    font: inherit;
    display: block;
    width: 100%;
    outline: none;
    transition: all 0.2s;
    padding: 0.95rem 1.5rem;
    padding-top: 1.38rem;
    box-shadow: ${({ theme }) => theme.shadows.default};
    transition: all 0.2s;

    :hover {
      box-shadow: ${({ theme }) => theme.shadows.hover};
    }

    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #fff5c0 inset;
      box-shadow: 0 0 0 30px #fff5c0 inset;
    }

    ${({ hasErrors }) => hasErrors && FailedInputStyles}

    ${({ isSuccess }) => isSuccess && SuccessfulInputStyles}
  }
`;

const SuccessfulInputStyles = css`
  background: #cbecd9;
  box-shadow: ${({ theme }) => theme.shadows.inputSuccess};

  :hover {
    box-shadow: ${({ theme }) => theme.shadows.inputSuccess};
  }
`;
const FailedInputStyles = css`
  background: ${({ theme }) => theme.colors.redGirl};
  box-shadow: ${({ theme }) => theme.shadows.inputError};

  :hover {
    box-shadow: ${({ theme }) => theme.shadows.inputError};
  }
`;
