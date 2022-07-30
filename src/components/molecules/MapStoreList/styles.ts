import styled from 'styled-components';
import { Color } from '@constants/styles';

export const totalCount = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 30px;
  right: 174px;
  transform: translateX(50%);
  border-radius: 5em;
  background: ${Color.orange};
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  padding: 12px 20px 14px 12px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  span {
    display: inline-block;
    vertical-align: -4px;
    margin-right: 5px;
  }
`;

export const BadgeList = styled.div`
  display: flex;
  align-items: center;
  margin-left: -10px;
  margin-top: -5px;

  > div {
    margin-left: 10px;
  }
`;
export const BookmarkArea = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;
export const InfoContainer = styled.div`
  display: flex;

  .MuiRating-root {
    font-size: 1.2rem;
    vertical-align: -1px;
    display: inline-block;
  }
`;
export const TitleArea = styled.div`
  h2 {
    padding-right: 30px;
  }
`;
export const RateArea = styled.div`
  margin-top: 2px;
  margin-bottom: -5px;
`;
export const Container = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding: 0 0 0 0;
  border-left: 1px solid ${Color.darkGrey};

  .thumbnail {
    width: 100px;
    margin-right: 14px;
  }

  .address_area,
  .phone_area {
    margin-bottom: 0;
    margin-top: 3px;
    align-items: start;

    span {
      font-size: 1.2rem;
    }

    > span:first-child {
      margin-top: 3px !important;
      margin-right: 3px !important;
    }

    .MuiIcon-root {
      font-size: 1.6rem !important;
    }
  }
`;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
export const StoreItem = styled.div`
  position: relative;
  width: 100%;
  padding: 12px 12px 18px 12px;
  border-bottom: 1px solid ${Color.darkGrey};
  cursor: pointer;

  &.active {
    background: ${Color.lightGrey};
  }
`;
