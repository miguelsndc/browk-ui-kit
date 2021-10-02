import styled, { css } from 'styled-components';

type WrapperProps = {
  isChecked: boolean;
  isDisabled?: boolean;
};

export const Wrapper = styled.label<WrapperProps>`
  display: inline-block;
  width: 3rem;
  padding: 0.1rem;
  height: 1.5rem;
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.disabled};

  position: relative;

  cursor: pointer;

  transition: background 0.2s;

  :hover {
    .slider {
      background: ${({ theme }) => theme.colors.hover};
    }
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.gray};
  }

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    top: 0;
  }

  .checked,
  .unchecked {
    position: absolute;
    transition: opacity 0.2s;
  }

  .checked {
    left: 6px;
    top: 5px;
    opacity: 0;
  }

  .unchecked {
    right: 6px;
    top: 4px;
  }

  .unchecked {
    width: 12px;
    height: 12px;
    border: 2px solid ${({ theme }) => theme.colors.disabled};
    border-radius: 50%;
  }

  .slider {
    display: inline-block;
    width: 1.05rem;
    height: 1.05rem;
    border-radius: 50%;
    transition: all 0.2s;

    background: ${({ theme }) => theme.colors.primary};
  }

  ${({ isChecked, theme }) =>
    isChecked &&
    css`
      background: ${theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};

      :hover {
        background: ${theme.colors.hover};
        border-color: ${({ theme }) => theme.colors.hover};
      }

      :focus {
        border-color: ${({ theme }) => theme.colors.black};
      }

      .slider {
        transform: translateX(22px);
        background: ${theme.colors.white} !important  ;
      }

      .checked {
        opacity: 1;
      }

      .unchecked {
        opacity: 0;
      }
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 56%;
      cursor: auto;
      pointer-events: none;
    `}
`;
