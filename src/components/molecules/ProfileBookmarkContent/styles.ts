import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  width: 100%;
  box-sizing: border-box;
`;

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Photo = styled.img`
  object-fit: cover;
  height: 9rem;
  width: 9rem;
  cursor: pointer;
`;
