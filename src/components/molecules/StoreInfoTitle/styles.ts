import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  span {
    line-height: 1;
  }

  .title {
    margin-bottom: 15px;
  }

  .title h2 {
    display: inline;
    align-items: center;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
export const Category = styled.div`
  margin-bottom: 3px;
`;

export const RateArea = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-left: 10px;
`;
export const BookmarkArea = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
`;
