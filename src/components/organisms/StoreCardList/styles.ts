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

export const ButtonArea = styled.div`
  width: 100%;
  font-size: 2rem;
`;

export const PaginationArea = styled.div`
  margin-top: 10px;

  > nav {
    display: flex;
    justify-content: center;

    .Mui-selected {
      background: none;
      font-weight: bold;
    }

    .MuiButtonBase-root {
      font-size: 1.6rem;
      margin-top: 3px;

      svg {
        font-size: 2rem;
      }
    }

    .MuiButtonBase-root:hover {
      background: none;
      font-weight: bold;
    }

    .MuiTouchRipple-root {
      display: none;
    }
  }
`;
