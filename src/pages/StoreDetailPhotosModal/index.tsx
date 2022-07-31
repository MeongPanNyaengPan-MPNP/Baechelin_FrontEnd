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

type Datatype = { data: { imgList: string[]; alt: string } };

function StoreDetailPhotosModal() {
  const location = useLocation();
  const { data } = location.state as Datatype;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
            loop
          >
            {data?.imgList?.map((v: any) => (
              <SwiperSlide>
                <img alt={`${data.alt}의 사진`} src={v} />
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
            {data?.imgList?.map((v: any) => (
              <SwiperSlide>
                <img alt={`${data.alt}의 사진`} src={v} />
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
