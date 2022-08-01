import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MainVisualSlideWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 420px;
  padding-right: 17px;

  > .swiper {
    height: 420px;
  }

  .swiper-pagination-bullet {
    background: #f4f4f4;
  }

  &#mainVisualSlide {
    .swiper-wrapper {
      transition-timing-function: ease-in-out !important;
      transition-duration: 700ms !important;
    }
  }
`;
