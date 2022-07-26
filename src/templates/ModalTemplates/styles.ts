import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding: 80px 20px 100px;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;
export const CloseBtnArea = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 25px;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
`;
