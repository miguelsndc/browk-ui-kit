import styled, { css } from 'styled-components';
import { ButtonVariants } from '.';

type CtaButtonProps = {
  variant: ButtonVariants;
  circle?: boolean;
  icon?: boolean;
};

export const CtaButton = styled.button<CtaButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem 1.5rem;
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};

  border-radius: 4px;
  border: none;

  :focus {
    outline-style: auto;
    outline-color: transparent;
  }

  cursor: pointer;

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

  ${({ variant }) => variant === 'primary' && Primary}
  ${({ variant }) => variant === 'primary-white' && PrimaryWhite}
  ${({ variant }) => variant === 'secondary' && Secondary}
  ${({ variant }) => variant === 'secondary-white' && SecondaryWhite}
  ${({ variant }) => variant === 'flat' && Flat}
  ${({ variant }) => variant === 'flat-white' && FlatWhite}
  ${({ variant }) => variant === 'secondary-dark' && SecondaryDark}
`;

const Primary = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

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

const PrimaryWhite = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

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

const Secondary = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;

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

const SecondaryWhite = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.white};

  transition: all 0.2s;

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

const Flat = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

  transition: all 0.2s;

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

const FlatWhite = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s;

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
const SecondaryDark = css`
  background: transparent;
  border: 3px solid ${({ theme }) => theme.colors.black};
  transition: all 0.2s;

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
