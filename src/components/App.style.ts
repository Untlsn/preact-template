import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-size: 32px;
  p { 
    margin: 0;
  }
`;

export const rotate = keyframes`
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
`;

export const Image = styled.img.attrs({ alt: '' })`
  height: min(50vh, 50vw);
  animation: ${rotate} 7s infinite linear;
  user-select: none;
`;