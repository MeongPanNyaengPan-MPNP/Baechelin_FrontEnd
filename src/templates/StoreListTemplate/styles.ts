import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export
export { Container, Wrapper } from '@styles/layout';

export const CardGroup = styled.div`
  width: 100%;
`;

export const SelectGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 20px;

  > span {
    display: inline-block;
    margin-right: 10px;
  }
`;
