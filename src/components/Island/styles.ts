import styled from 'styled-components';

type ProgressBarProps = {
  progress: number;
};

export const Wrapper = styled.article`
  position: relative;
  width: 100%;
  max-width: 400px;
  font: ${({ theme }) => theme.fonts.P2RegularRoboto};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 8px;
`;

export const ProgressText = styled.span`
  position: absolute;
  left: 1rem;
  top: 0.15rem;
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.P3RegularRoboto};
  z-index: 9;
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ progress }) => `${progress > 100 ? 100 : progress}%`};
  height: 1.5rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green};
  font: ${({ theme }) => theme.fonts.P3RegularRoboto};
  border-top-right-radius: ${({ progress }) => (progress >= 100 ? '8px' : 0)};

  transition: all 0.2s;

  z-index: 3;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 134px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(17, 17, 17, 1) 100%
  );
  opacity: 0.7;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Banner = styled.img`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 134px;
  object-fit: cover;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: -3.35rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.white};

  & * {
    z-index: 2;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    object-fit: cover;
  }
`;

export const Details = styled.div`
  padding: 1rem;

  h2 {
    font: ${({ theme }) => theme.fonts.H6BoldMontserrat};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    text-decoration: none;
  }
`;
