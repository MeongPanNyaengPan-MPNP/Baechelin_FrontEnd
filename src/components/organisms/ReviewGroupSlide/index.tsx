import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { CardStylesProps } from '@molecules/StoreCard';
import SlidePagination from '@atoms/SlidePagination';
import SlideButtonsArea from '@molecules/SlideButtons';
import ReviewCard from '@molecules/ReviewCard';
import * as S from './styles';

export type CardGroupSlideProps<T> = {
  slidesPerView?: number;
  spaceBetween?: number;
  paginationId?: string;
  children?: ReactNode;
  cardItems: T[];
  slideId: string;
  hasNavigation?: boolean;
  autoplayDelay?: number;
  slidesPerGroup?: number;
  speed?: number;
} & CardStylesProps;

function ReviewGroupSlide<T>({
  slidesPerView = 4,
  spaceBetween = 0,
  cardItems,
  children,
  paginationId,
  slideId = 'slide',
  autoplayDelay,
  speed = 1000,
  slidesPerGroup = slidesPerView,
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
        slidesPerGroup={slidesPerGroup}
        modules={[Pagination, Navigation, Autoplay]}
        mousewheel={{ invert: true }}
        autoplay={autoplayDelay ? { delay: autoplayDelay } : false}
        speed={speed}
        pagination={{
          clickable: true,
          el: `#${paginationId}`,
          type: 'bullets',
        }}
        navigation={{
          prevEl: `#${PrevButtonId}`,
          nextEl: `#${NextButtonId}`,
        }}
        loop={cardItems.length >= slidesPerView}
      >
        {cardItems.map((cardItem, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <ReviewCard<T> {...cardItem} />
          </SwiperSlide>
        ))}
        {children}
        {paginationId && <SlidePagination paginationId={paginationId} />}
      </Swiper>
      {hasNavigation && <SlideButtonsArea hover prevId={PrevButtonId} nextId={NextButtonId} />}
    </S.CardSlideGroup>
  );
}

export default ReviewGroupSlide;
