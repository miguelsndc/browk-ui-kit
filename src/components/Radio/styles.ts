import styled from 'styled-components';

export const Wrapper = styled.label`
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;

  input {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
  }

  input:checked + .select-box:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  input:not(:checked) + .select-box {
    opacity: 0.25;

    :hover {
      opacity: 0.6;
    }
  }

  :focus-within .select-box {
    border: 2px solid ${({ theme }) => theme.colors.hover};
  }

  .select-box {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;
  }

  .selected {
    width: 0.625rem;
    height: 0.625rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }
`;
