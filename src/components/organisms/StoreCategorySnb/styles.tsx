import styled from 'styled-components';
import { Color } from '@constants/styles';

export { Container } from '@styles/layout';
export const SnbWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 45px;
`;

export const CategoryArea = styled.div<{ border?: boolean }>`
  background: #fff;

  border-bottom: ${(props) => (props.border ? ` 1px solid #a9a9a9` : `none`)};
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
export const RoundButtonArea = styled.div`
  position: absolute;
  right: 40px;
  top: -5px;
  cursor: pointer;

  &.map_button_area {
    right: 100px;
  }

  button {
    position: relative;
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
    button ::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 1px solid ${Color.orange};
      position: absolute;
      left: 0;
      top: 0;
    }

    > span {
      font-weight: bold;
    }
  }
`;
