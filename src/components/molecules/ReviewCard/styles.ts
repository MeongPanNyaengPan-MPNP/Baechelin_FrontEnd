import styled from 'styled-components';
import Span from '@atoms/Span';

export const CardItem = styled.div`
  position: relative;
  margin: 0 20px;
  height: 370px;
  cursor: pointer;
`;
export const CardItemInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  align-items: baseline;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 25px 30px;
  background: #fff;

  > * {
    flex: 1;
  }
`;

export const CardContentArea = styled.article`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
export const CardContentTop = styled.div`
  width: 100%;
  height: calc(100% - 100px);
`;
export const cCardContentBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
`;
export const CardStoreInfoArea = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  justify-content: space-between;
`;
export const CardUserInfoArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  & > figure {
    margin-right: 25px;
    flex-shrink: 0;
  }
`;
export const UserInfoArea = styled.div``;
export const UserName = styled(Span)`
  display: block;
  margin: 5px 0;
`;
export const CardTextArea = styled.div`
  width: 100%;
  margin-bottom: 28px;

  & > p {
    margin-top: 20px;
    font-size: 1.4rem;
    line-height: 1.6;
    color: #8a8a8a;
  }
`;
export const CardImageList = styled.ul`
  display: flex;

  & > li {
    flex: 1;
    margin-right: 10px;
    justify-content: space-around;
  }
`;
export const StoreTagListGroup = styled.div`
  & + & {
    margin-top: 50px;
  }
`;
