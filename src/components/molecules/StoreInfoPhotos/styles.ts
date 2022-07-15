import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 23.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  width: 49%;
  user-select: none;
`;

export const Photo = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const Photos = styled.img`
  width: 49%;
  height: 49%;
  object-fit: cover;
  cursor: pointer;
`;
