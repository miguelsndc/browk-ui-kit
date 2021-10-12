import styled, { css } from 'styled-components';
import { Side } from '.';

type WrapperProps = {
  isActive: boolean;
  side: Side;
};

function handleSideStyles(side: Side) {
  switch (side) {
    case 'left':
      return css`
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      `;
    case 'right':
      return css`
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      `;
    default:
      return css`
        border-radius: 0;
      `;
  }
}

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};
  padding: 0.75rem 1rem;

  border: 2px solid ${({ theme }) => theme.colors.grayS};

  transition: border 0.2s;

  :hover {
    border-color: ${({ theme }) => theme.colors.grayK};
  }

  ${({ side }) => handleSideStyles(side)}

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-color: ${theme.colors.primary};

      :hover {
        border-color: ${({ theme }) => theme.colors.hover};
      }
    `}
`;
