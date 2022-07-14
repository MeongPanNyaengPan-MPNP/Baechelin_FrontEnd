import styled from 'styled-components';

export const ButtonArea = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 1;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    margin: 0 15px;

    svg {
      font-size: 3rem;
      color: #fff;
    }
  }
`;

export const MainVisualSlideWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 420px;

  > .swiper {
    height: 420px;
  }
`;

export const PaginationArea = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  bottom: 15px;
  width: 100%;

  .swiper-pagination-bullet {
    background: #f4f4f4;
    opacity: 1;
    margin: 0 3px;
  }

  .swiper-pagination-bullet-active {
    background: #ffcf23;
  }
`;
