import styled from 'styled-components';

export { Container } from '@styles/layout';
export const SnbWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 45px;
`;

export const CategoryArea = styled.div`
  background: #fff;
`;
export const FacilityArea = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 20px auto 0;
`;
export const Inner = styled.div`
  width: 100%;
  max-width: 1280px;
`;
export const ResetButtonArea = styled.div`
  position: absolute;
  right: 40px;
  top: -5px;

  cursor: pointer;

  button {
    padding: 8px;
    font-size: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-out;
  }

  > span {
    display: block;
    margin-top: 5px;
    text-align: center;
    opacity: 0.8;
  }

  &:hover {
    button {
      transform: rotate(-90deg);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    }
  }
`;
