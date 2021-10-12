import styled, { css } from 'styled-components';
import { BadgeVariants } from '.';

type WrapperProps = {
  variant: BadgeVariants;
};

function handleBadgeVariants(variant: BadgeVariants) {
  switch (variant) {
    case 'white':
      return WhiteVariantStyles;
    case 'primary':
      return PrimaryVariantStyles;
    case 'secondary':
      return SecondaryVariantStyles;
    default:
      return PrimaryVariantStyles;
  }
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 2px 0.7rem;
  border-radius: 100px;
  display: inline-block;

  font: ${({ theme }) => theme.fonts.P3RegularRobotoBold};

  ${({ variant }) => handleBadgeVariants(variant)}
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
