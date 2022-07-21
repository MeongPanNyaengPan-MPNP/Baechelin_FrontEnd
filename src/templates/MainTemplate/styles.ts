import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export
export { Wrapper, Container } from '@styles/layout';
export const MainReviewListSection = styled.section`
  position: relative;
  margin: 130px auto 0;
  width: 100%;
  max-width: 1320px;

  & .swiper {
    overflow: visible;
  }

  & .swiper-wrapper {
    transition-timing-function: linear;
  }

  & > a {
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
  }
`;
export const StoreCategorySnbArea = styled.section``;
