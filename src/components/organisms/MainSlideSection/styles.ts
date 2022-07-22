import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MainStoreListSection = styled.section`
  position: relative;
  max-width: 1280px; //TODO : Container 사이즈에 맞추기
  margin: 30px auto 70px;

  & p[aria-label='link'] {
    margin-bottom: 18px;
  }
`;
