import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Thumbnail, { ThumbNailProps } from '@atoms/Thumbnail';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';
import * as S from './styles';

export interface SlideGroupProps {
  viewLength?: number;
  spaceBetween?: number;
  paginationId?: string;
  slideItems: ThumbNailProps[];
  children?: ReactNode;
}

function VisualSlide({ viewLength = 1, spaceBetween = 0, slideItems, children, paginationId }: SlideGroupProps) {
  return (
    <Swiper
      className="banner"
      height={420}
      spaceBetween={spaceBetween}
      loop={slideItems.length >= viewLength}
      slidesPerView={viewLength}
      modules={[Pagination, Autoplay, Navigation]}
      pagination={{
        clickable: true,
        el: `#${paginationId}`,
        type: 'bullets',
      }}
    >
      {slideItems.map(({ alt, src, txt }) => (
        <SwiperSlide key={alt}>
          <S.SlideArea>
            <Thumbnail alt={alt} src={src} height="100%" />
            <S.TextArea>
              <img alt={alt} src={txt} />
            </S.TextArea>
          </S.SlideArea>
        </SwiperSlide>
      ))}
      {children}
    </Swiper>
  );
}

export default VisualSlide;
