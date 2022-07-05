import React, { useRef } from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';

// Import Swiper styles

function FullSlide() {
  const dummy = ['1', '2', '3'];
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  SwiperCore.use([Navigation, Scrollbar]);
  const swiperSet = {
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    slidesPerView: 1,
    autoplay: { delay: 5000 },
    /*
    onBeforeInit: (swiper: SwiperCore) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    },
    */
  };
  return (
    <>
      <Swiper
        {...swiperSet}
      >
        {
          dummy.map((item) => <SwiperSlide key={item}>{item}</SwiperSlide>)
        }
      </Swiper>
      <button type='button' ref={prevRef}>PREV</button>
      <button type='button' ref={nextRef}>NEXT</button>
    </>
  );
}

export default FullSlide;
