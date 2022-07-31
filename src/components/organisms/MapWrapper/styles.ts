import styled from 'styled-components';
import { Color } from '@constants/styles';

export const Content = styled.div`
  position: relative;
  width: calc(100% - 380px);
  height: 100%;
  display: flex;
  align-items: stretch;
`;
export const StoreListArea = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
  padding-bottom: 39px;
  height: calc(100% - 45px);
  width: 380px;
  z-index: 101;
  background: #fff;
`;
export const DisabledBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
  padding-bottom: 40px;
  height: calc(100% - 45px);
  width: 380px;
  z-index: 102;
  background: #fff;
`;
export const PaginationBar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 380px;
  height: 40px;
  z-index: 101;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${Color.darkGrey};

  .MuiPaginationItem-root {
    font-size: 1.4rem;
    background: none;

    &:hover {
      background: none;
    }

    &.Mui-selected {
      font-weight: bold;
      color: ${Color.orange};
    }
  }
`;
export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);

  .reset_button_area {
    right: 80px;
  }
`;

export const CategoryContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
export const MyLocationArea = styled.div`
  position: absolute;
  right: 40px;
  top: 15px;
  color: #3b3b3b;
`;
