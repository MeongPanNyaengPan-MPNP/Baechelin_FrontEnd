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
  height: calc(100% - 46px);
  width: 380px;
  z-index: 101;
  background: #fff;
`;
export const MapStoreListInner = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;
export const PaginationBar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 380px;
  height: 41px;
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

export const totalCount = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 30px;
  right: 420px;

  button {
    display: flex;
    align-items: flex-start;
    border-radius: 5em;
    background: ${Color.orange};
    color: #fff;
    font-size: 1.6rem;
    text-align: center;
    padding: 16px 20px 14px 20px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s;
    line-height: 1;

    strong {
      display: inline-block;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      margin-left: 0px;

      > span {
        white-space: nowrap;
        margin-bottom: -2px;
      }
    }

    span {
      display: inline-block;
      vertical-align: -4px;
      margin-left: 10px;
    }

    &:hover {
      color: ${Color.orange};
      background: #fff;
      padding-left: 20px;
      border: 1px solid ${Color.orange};

      span {
        margin-left: 10px;
        color: ${Color.orange};
      }

      strong {
        display: inline-block;
        width: auto;
        visibility: visible;
      }
    }
  }
`;
export const MapStoreList = styled.div`
  background: ${Color.lightGrey};

  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0px;
    top: 0;
    width: 3px;
    height: 100%;
    background: ${Color.orange};
  }
`;
export const MessageArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
