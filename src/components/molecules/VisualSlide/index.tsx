import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Thumbnail, { ThumbNailProps } from '@atoms/Thumbnail';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

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
      slidesPerView={viewLength}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        el: `#${paginationId}`,
        type: 'bullets',
      }}
      autoplay={{ delay: 5000 }}
      loop
    >
      {slideItems.map(({ alt, src }) => (
        <SwiperSlide key={alt}>
          <Thumbnail alt={alt} src={src} height="100%" />
        </SwiperSlide>
      ))}
      {children}
    </Swiper>
  );
}

export default VisualSlide;
