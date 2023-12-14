import styled, { css, keyframes } from 'styled-components';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  
  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  
  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) & {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

export const LogosWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`