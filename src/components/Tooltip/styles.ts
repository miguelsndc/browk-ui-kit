import styled, { css } from 'styled-components';

type WrapperProps = {
  position:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right';
};

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grayL};
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 4px;
  position: relative;

  &::before,
  &::after {
    display: block;
    content: '/0020';
    width: 0px;
    height: 0px;

    position: absolute;
    overflow: hidden;
    border: solid 7px transparent;
    transform: scaleY(1.1);
  }

  ${({ position }) => position === 'top-right' && TopRightStyles}
  ${({ position }) => position === 'top-left' && TopLeftStyles}
  ${({ position }) => position === 'bottom-right' && BottomRightStyles}
  ${({ position }) => position === 'bottom-left' && BottomLeftStyles}
  ${({ position }) => position === 'right' && RightStyles}
  ${({ position }) => position === 'left' && LeftStyles}
`;

const TopRightStyles = css`
  &::after {
    top: -14px;
    right: 10px;
    border-bottom-color: #fff;
  }
  &::before {
    top: -17px;
    right: 9px;
    border-width: 8px;
    border-bottom-color: ${({ theme }) => theme.colors.grayL};
  }
`;

const TopLeftStyles = css`
  &::after {
    top: -14px;
    left: 10px;
    border-bottom-color: #fff;
  }

  &::before {
    top: -17px;
    left: 9px;
    border-width: 8px;
    border-bottom-color: ${({ theme }) => theme.colors.grayL};
  }
`;

const BottomRightStyles = css`
  &::after {
    bottom: -14px;
    right: 12px;
    border-top-color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    bottom: -17px;
    right: 11px;
    border-width: 8px;
    border-top-color: ${({ theme }) => theme.colors.grayL};
  }
`;

const BottomLeftStyles = css`
  &::after {
    bottom: -14px;
    left: 12px;
    border-top-color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    bottom: -17px;
    left: 11px;
    border-width: 8px;
    border-top-color: ${({ theme }) => theme.colors.grayL};
  }
`;

const RightStyles = css`
  &::after {
    top: 35%;
    right: -14px;
    border-left-color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    top: 33%;
    right: -17px;
    border-width: 8px;
    border-left-color: ${({ theme }) => theme.colors.grayL};
  }
`;

const LeftStyles = css`
  &::after {
    top: 35%;
    left: -14px;
    border-right-color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    top: 33%;
    left: -17px;
    border-width: 8px;
    border-right-color: ${({ theme }) => theme.colors.grayL};
  }
`;
