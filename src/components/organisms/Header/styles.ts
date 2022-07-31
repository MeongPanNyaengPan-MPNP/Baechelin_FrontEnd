import styled from 'styled-components';
import Logo from '@atoms/Logo';

export const Wrap = styled.div`
  width: 100vw;
  height: 80px;
  background-color: white;
  border-bottom: 2px solid lightgray;
`;
export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 80px;
  background-color: white;
  border-bottom: 2px solid lightgray;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  justify-content: space-between;

  button:hover {
    font-weight: bold !important;
  }
`;
export const UserLogo = styled(Logo)`
  cursor: pointer;
`;
