import styled, { css } from 'styled-components';
import { ButtonVariants } from '.';

type CtaButtonProps = {
  variant: ButtonVariants;
  circle?: boolean;
  icon?: boolean;
  wFull?: boolean;
};

function handleButtonVariants(variant: ButtonVariants) {
  switch (variant) {
    case 'primary':
      return PrimaryVariantStyles;
    case 'primary-white':
      return PrimaryWhiteVariantStyles;
    case 'secondary':
      return SecondaryVariantStyles;
    case 'secondary-white':
      return SecondaryWhiteVariantStyles;
    case 'flat':
      return FlatVariantStyles;
    case 'flat-white':
      return FlatWhiteVariantStyles;
    case 'secondary-dark':
      return SecondaryDarkVariantStyles;
    default:
      return PrimaryVariantStyles;
  }
}

export const CtaButton = styled.button<CtaButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.7rem 1.5rem;
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};

  border-radius: 4px;
  border: none;
  cursor: pointer;

  :focus {
    outline-style: auto;
    outline-color: transparent;
  }

  ${({ circle }) =>
    circle &&
    css`
      border-radius: 9999px;
    `}

  ${({ icon }) =>
    icon &&
    css`
      width: 2.75rem;
      height: 2.75rem;
      padding: 0.25rem;
      font-size: 0;
    `}

  ${({ wFull }) =>
    wFull &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ variant }) => handleButtonVariants(variant)}
`;

const PrimaryVariantStyles = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  svg path {
    fill: ${({ theme }) => theme.colors.white};
  }

  transition: all 0.2s;

  :hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  :active {
    background: ${({ theme }) => theme.colors.active};
  }

  :disabled {
    background: ${({ theme }) => theme.colors.disabled};
    pointer-events: none;
    cursor: auto;
  }

  :focus {
    outline-style: auto;
    outline-color: ${({ theme }) => theme.colors.active};
  }
`;

const PrimaryWhiteVariantStyles = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  transition: all 0.2s;

  :hover {
    background: ${({ theme }) => theme.colors.whiteS};
  }

  :focus {
    outline-style: auto;
    outline-color: ${({ theme }) => theme.colors.gray};
  }

  :disabled {
    pointer-events: none;
    cursor: auto;
    opacity: 56%;
  }
`;

const SecondaryVariantStyles = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;
  padding: 0.6rem 1.5rem;

  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary}0A;
  }

  :active {
    background: ${({ theme }) => theme.colors.primary}29;
  }

  :focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.gray};
  }

  :disabled {
    pointer-events: none;
    cursor: auto;
    opacity: 56%;
  }
`;

const SecondaryWhiteVariantStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.white};
  transition: all 0.2s;

  svg path {
    fill: ${({ theme }) => theme.colors.white};
  }

  :hover {
    background: ${({ theme }) => theme.colors.white}1f;
  }

  :active {
    background: ${({ theme }) => theme.colors.white}29;
  }

  :disabled {
    opacity: 56%;
    pointer-events: none;
    cursor: auto;
  }

  :focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.gray};
  }
`;

const FlatVariantStyles = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.85rem 1.65rem;

  transition: all 0.2s;

  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary}0A;
  }

  :active {
    background: ${({ theme }) => theme.colors.primary}29;
  }

  :disabled {
    opacity: 56%;
    pointer-events: none;
    cursor: auto;
  }

  :focus {
    outline-style: auto;
    outline-color: ${({ theme }) => theme.colors.gray};
  }
`;

const FlatWhiteVariantStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.85rem 1.65rem;

  transition: all 0.2s;

  svg path {
    fill: ${({ theme }) => theme.colors.white};
  }

  :hover {
    background: ${({ theme }) => theme.colors.white}1F;
  }

  :active {
    background: ${({ theme }) => theme.colors.white}29;
  }

  :focus {
    outline-style: auto;
    outline-color: ${({ theme }) => theme.colors.gray};
  }

  :disabled {
    opacity: 56%;
    pointer-events: none;
    cursor: auto;
  }
`;

const SecondaryDarkVariantStyles = css`
  background: transparent;
  border: 3px solid ${({ theme }) => theme.colors.black};
  transition: all 0.2s;

  svg path {
    fill: ${({ theme }) => theme.colors.black};
  }

  :hover {
    background: ${({ theme }) => theme.colors.black}0A;
  }

  :active {
    background: ${({ theme }) => theme.colors.black}1F;
  }

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray};
  }

  :disabled {
    opacity: 56%;
    pointer-events: none;
    cursor: auto;
  }
`;
