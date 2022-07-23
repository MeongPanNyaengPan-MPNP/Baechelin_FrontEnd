import { useSwiper } from 'swiper/react';
import React from 'react';

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
