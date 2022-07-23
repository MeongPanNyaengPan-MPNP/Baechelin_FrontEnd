import styled from 'styled-components';

export const CardItem = styled.li`
  box-sizing: border-box;
`;
export const CardList = styled.ul<{ spaceBetween: number; col: number }>`
  margin: ${(props) => `0 -${props.spaceBetween / 2}px`};
  display: flex;
  flex-wrap: wrap;

  ${CardItem} {
    padding: ${(props) => `${props.spaceBetween / 2}px`};

    width: ${(props) => `${100 / props.col}%`};
  }
`;
