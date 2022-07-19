import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 150px;
`;
export const MainStoreListSection = styled.section`
  position: relative;
  max-width: 1280px; //TODO : Container 사이즈에 맞추기
  margin: 30px auto 70px;

  & > a {
    margin-bottom: 18px;
  }
`;
export const MainReviewListSection = styled.section`
  position: relative;
  margin: 130px auto 0;
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
