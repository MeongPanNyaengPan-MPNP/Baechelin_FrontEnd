import styled from 'styled-components';

export const CardItem = styled.li`
  box-sizing: border-box;
`;
export const CardList = styled.ul<{ spaceBetween: number; col: number }>`
  margin: ${(props) => `0 -${props.spaceBetween / 2}px`};
  display: flex;
  flex-wrap: wrap;

  .no_data_box {
    margin: 0 20px;
  }

  ${CardItem} {
    padding: ${(props) => `${props.spaceBetween / 2}px`};

    width: ${(props) => `${100 / props.col}%`};
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  font-size: 2rem;
`;
export const CardListTitleArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const totalCountTextArea = styled.div`
  text-align: right;
`;
export const MessageArea = styled.div`
  margin-top: 20px;
`;
export { PaginationArea } from '@styles/ui';
