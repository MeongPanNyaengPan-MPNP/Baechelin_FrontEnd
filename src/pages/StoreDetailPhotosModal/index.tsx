/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import ModalTemplates from '@templates/ModalTemplates';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import * as S from './styles';

function StoreDetailPhotosModal() {
  const location = useLocation();
  const { data }: any = location.state;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const imgsExp = [
    { storeImageUrl: 'https://swiperjs.com/demos/images/nature-1.jpg', key: 1 },
    { storeImageUrl: 'https://swiperjs.com/demos/images/nature-2.jpg', key: 2 },
    { storeImageUrl: 'https://swiperjs.com/demos/images/nature-3.jpg', key: 3 },
    { storeImageUrl: 'https://swiperjs.com/demos/images/nature-4.jpg', key: 4 },
    { storeImageUrl: 'https://swiperjs.com/demos/images/nature-5.jpg', key: 5 },
    { storeImageUrl: 'https://swiperjs.com/demos/images/nature-6.jpg', key: 6 },
    { storeImageUrl: 'https://swiperjs.com/demos/images/nature-7.jpg', key: 7 },
  ];

  const imgs = [{ storeImageUrl: data[0] }];
  if (data.length < 5) {
    imgs.push(...imgsExp);
  }

  console.log('i,g', data);
  console.log('img arr', imgs);

  return (
    <ModalTemplates>
      <S.Container>
        <S.Wrapper>
          <Swiper
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {imgs.map((v: any) => (
              <SwiperSlide>
                <img src={v.storeImageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {imgs.map((v: any) => (
              <SwiperSlide>
                <img src={v.storeImageUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.Wrapper>
      </S.Container>
    </ModalTemplates>
  );
  // return <LoginTemplate prevPath="dd" />;
}

export default StoreDetailPhotosModal;
