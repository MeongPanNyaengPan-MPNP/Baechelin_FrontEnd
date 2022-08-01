import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FormErrMessage = styled.p<{ color?: string; opacity?: number }>`
  display: block;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-size: 1.4rem;
  color: ${(props) => props.color || `#db4c4c`};
  opacity: ${(props) => props.opacity || 1};
  padding: 10px 2px;
  font-weight: 500;
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
