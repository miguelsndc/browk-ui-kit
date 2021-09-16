import styled, { css } from 'styled-components';

type WrapperProps = {
  variant: 'white' | 'primary' | 'secondary';
};

export const Wrapper = styled.div<WrapperProps>`
  padding: 2px 0.7rem;
  border-radius: 100px;
  display: inline-block;

  font: ${({ theme }) => theme.fonts.P3RegularRobotoBold};

  ${({ variant }) => variant === 'white' && WhiteVariantStyles}
  ${({ variant }) => variant === 'primary' && PrimaryVariantStyles}
  ${({ variant }) => variant === 'secondary' && SecondaryVariantStyles};
`;

const WhiteVariantStyles = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

const PrimaryVariantStyles = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const SecondaryVariantStyles = css`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
