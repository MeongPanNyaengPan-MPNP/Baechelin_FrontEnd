import styled from 'styled-components';
import { Color } from '@constants/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 13rem;
  /* max-height: 13rem; */
  min-height: 4rem;
  background-color: ${Color.white};
  border-bottom: 1px solid ${Color.grey};
  padding: 0.6rem 1rem;

  span {
    :hover {
      background-color: ${Color.lightGrey};
    }
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 1.5rem;
  margin-bottom: 1rem;
`;
