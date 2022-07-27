import styled from 'styled-components';
import { Color } from '@constants/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  min-height: 35rem;
  background-color: ${Color.white};
  border-bottom: 1px solid ${Color.grey};
  padding: 1.6rem 2.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 3.2rem 0 1.4rem;

  div {
    display: flex;
    width: 25%;
    justify-content: space-between;
    align-items: center;
  }
`;
