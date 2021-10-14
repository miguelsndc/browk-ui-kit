import styled, { css } from 'styled-components';
import { NotificationTypes } from '.';

type IconWrapperProps = {
  type: NotificationTypes;
};

type InfoContainerProps = {
  shouldCenterContent: boolean;
};

function handleIconWrapperTypeStyles(iconType: NotificationTypes) {
  switch (iconType) {
    case 'info':
      return css`
        background: ${({ theme }) => theme.colors.primary}1f;

        svg path {
          fill: ${({ theme }) => theme.colors.primary};
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
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  width: 100%;
  max-width: 394px;
  padding: 1rem;

  h2 {
    font: ${({ theme }) => theme.fonts.P1RegularRobotoBold};
    word-break: break-all;
    margin-bottom: 0.5rem;
  }

  p {
    word-break: break-all;
  }
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${({ type }) => handleIconWrapperTypeStyles(type)}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  justify-content: space-between;

  > div {
    max-width: 80%;
  }

  ${({ shouldCenterContent }) =>
    shouldCenterContent &&
    css`
      align-items: center;
    `}
`;
