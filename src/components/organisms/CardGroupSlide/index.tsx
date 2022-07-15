import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import StoreCard, { CardStylesProps } from '@molecules/StoreCard';
import SlidePagination from '@atoms/SlidePagination';
import SlideButtonsArea from '@molecules/SlideButtons';
import * as S from './styles';

export type CardGroupSlideProps<T> = {
  slidesPerView?: number;
  spaceBetween?: number;
  paginationId?: string;
  children?: ReactNode;
  cardItems: T[];
  slideId: string;
  hasNavigation?: boolean;
} & CardStylesProps;

function CardGroupSlide<T>({
  slidesPerView = 4,
  spaceBetween = 0,
  cardItems,
  children,
  paginationId,
  slideId = 'slide',
  size,
  hasNavigation = true,
}: CardGroupSlideProps<T>) {
  const PrevButtonId = `${slideId}PrevButton`;
  const NextButtonId = `${slideId}NextButton`;
  return (
    <S.CardSlideGroup id={slideId} paginationId={paginationId}>
      <Swiper
        className="banner"
        height={420}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          el: `#${paginationId}`,
          type: 'bullets',
        }}
        navigation={{
          prevEl: `#${PrevButtonId}`,
          nextEl: `#${NextButtonId}`,
        }}
        autoplay={{ delay: 5000 }}
        loop={cardItems.length >= slidesPerView}
      >
        {cardItems.map((cardItem, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <StoreCard<T> {...cardItem} size={size} />
          </SwiperSlide>
        ))}
        {children}
        {paginationId && <SlidePagination paginationId={paginationId} />}
      </Swiper>
      {hasNavigation && <SlideButtonsArea hover prevId={PrevButtonId} nextId={NextButtonId} />}
    </S.CardSlideGroup>
  );
}

export default CardGroupSlide;
