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

export { PaginationArea } from '@styles/ui';
