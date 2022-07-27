import styled, { css } from 'styled-components';
import { CardStylesProps } from '@molecules/StoreCard/index';

export const CardFigureArea = styled.div`
  background: #efefef;
`;
export const CardContentArea = styled.div`
  padding: 12px 20px 18px;
`;
export const CardContentAreaTop = styled.div``;
export const StoreNameArea = styled.div`
  display: flex;
  align-items: center;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const StoreTitle = styled.p`
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CardContentAddressArea = styled.div`
  margin-top: 15px;
`;
export const CardContentAddress = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  margin-top: 5px;

  span {
    padding-right: 5px;
  }
`;
export const StarArea = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 2px;
  margin-left: 5px;

  & .rating-value {
    margin-left: 5px;
    font-size: 1.2rem;
  }
`;
export const CardContentFacilityArea = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  & > div {
    margin-right: 10px;
  }
`;
export const CardItem = styled.article<CardStylesProps>`
  background: #fff;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  ${(props) => {
    if (props.size === 'M') {
      return css`
        ${CardFigureArea} {
          height: 145px;
        }
      `;
    }
    if (props.size === 'L') {
      return css`
        ${CardFigureArea} {
          height: 205px;
        }
      `;
    }
  }}
`;
