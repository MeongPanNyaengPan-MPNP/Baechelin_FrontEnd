import styled from 'styled-components';

export const SnackBarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  z-index: 100;
  flex-direction: column;
`;
export const SnackBarArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;
  font-size: 2rem;
  text-align: center;
`;
