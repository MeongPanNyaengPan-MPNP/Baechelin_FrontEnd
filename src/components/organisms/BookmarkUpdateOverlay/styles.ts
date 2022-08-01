import styled from 'styled-components';
// import { Color } from '@constants/styles';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13rem;
  height: 5.5rem;
  padding: 1rem 1rem 1.5rem;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;

    &:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;
