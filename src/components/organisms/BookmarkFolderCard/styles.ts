import { Color } from '@constants/styles';
import styled from 'styled-components';
// import { Color } from '@constants/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 29rem;
  height: 23.4rem;
  margin-right: 4rem;
  margin-bottom: 2.8rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  &:nth-child(4n + 0) {
    margin-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  height: 18.4rem;
  width: 100%;
  background-color: ${Color.grey};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4.8rem;
  width: 100%;
  padding: 0 1rem;
  background-color: white;
`;

export const Photos = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
