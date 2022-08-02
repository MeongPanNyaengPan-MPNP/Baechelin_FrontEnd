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
  width: 1240px;
  padding: 0 20px;
  justify-content: space-between;

  button:hover {
    font-weight: bold !important;
  }
`;
export const UserLogo = styled(Logo)``;
export const LogoArea = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;
  margin-left: 12px;
  background-color: #e6e6e6;
  object-fit: cover;

  img {
    cursor: pointer;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    padding: 0;
  }
`;
