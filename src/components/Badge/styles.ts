import styled, { css } from 'styled-components';

type WrapperProps = {
  variant: 'white' | 'primary' | 'secondary';
};

export const Wrapper = styled.div<WrapperProps>`
  padding: 1px 0.5rem;
  border-radius: 100px;
  display: inline-block;

  font: ${({ theme }) => theme.fonts.P3RegularRobotoBold};

  ${({ variant, theme }) =>
    variant === 'white' &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.primary};

      box-shadow: ${theme.shadows.default};
    `}

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    `};
`;
