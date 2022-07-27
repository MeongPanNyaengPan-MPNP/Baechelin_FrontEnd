import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .nameSpan {
    margin-bottom: 0.7rem;
  }
`;
