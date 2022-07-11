import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Thumbnail from '@atoms/Thumbnail';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export interface SlideItemsType<T> {
  viewLength?: number;
  spaceBetween?: number;
  paginationId?: string;
  slideItems: T;
  children: ReactNode;
}

export function SlideButtonNext({ children }: { children: any }) {
  const swiper = useSwiper();
  return (
    <button type="button" onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
}

export function SlideButtonPrev({ children }: { children: any }) {
  const swiper = useSwiper();
  return (
    <button type="button" onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
}

function SlideGroup<T extends { src: string; alt: string }[]>({
  viewLength = 1,
  spaceBetween = 0,
  slideItems,
  children,
  paginationId,
}: SlideItemsType<T>) {
  return (
    <div>
      <Swiper
        className="banner"
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
            <Thumbnail alt={alt} src={src} />
          </SwiperSlide>
        ))}
        {children}
      </Swiper>
    </div>
  );
}

export default SlideGroup;