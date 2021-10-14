import styled, { css } from 'styled-components';
import { PopupIcons } from '.';

type IconWrapperProps = {
  type: PopupIcons;
};

function handleIconWrapperTypeStyles(iconType: PopupIcons) {
  switch (iconType) {
    case 'warning':
      return css`
        background: #ffd9121f;

        svg {
          width: 2.75rem;
          height: 2.75rem;
          path {
            fill: #ffd912;
          }
        }
      `;
    case 'success':
      return css`
        background: ${({ theme }) => theme.colors.green}1f;

        svg path {
          fill: ${({ theme }) => theme.colors.green};
        }
      `;

    case 'error':
      return css`
        background: ${({ theme }) => theme.colors.red}1f;

        svg path {
          fill: ${({ theme }) => theme.colors.superRed};
        }
      `;

    default:
      return css`
        background: ${({ theme }) => theme.colors.green}1f;

        svg path {
          fill: ${({ theme }) => theme.colors.green};
        }
      `;
  }
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 8px;
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 1.5rem 0;
  z-index: 99;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font: ${({ theme }) => theme.fonts.H4BoldMontserrat};
    margin-bottom: 0.75rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.75rem;
    gap: 0.5rem;
  }

  > button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: 1rem;

  svg {
    width: 3.5rem;
    height: 3.5rem;
  }

  ${({ type }) => handleIconWrapperTypeStyles(type)}
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0.5;
  z-index: 98;
`;
