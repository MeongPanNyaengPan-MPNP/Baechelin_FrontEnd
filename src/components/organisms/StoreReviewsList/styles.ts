import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
`;
export const ReviewListGroup = styled.ul`
  margin: 0 -20px 50px;

  > li + li {
    margin-top: 28px;
  }
`;

export { PaginationArea } from '@styles/ui';
