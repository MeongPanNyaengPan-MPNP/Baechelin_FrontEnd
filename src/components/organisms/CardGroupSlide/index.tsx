import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import StoreCard from '@molecules/StoreCard';

export type CardGroupSlideProps<TNearStore> = {
  viewLength?: number;
  spaceBetween?: number;
  paginationId?: string;
  children?: ReactNode;
  cardItems: TNearStore[];
};

function CardGroupSlide<TNearStore>({
  viewLength = 1,
  spaceBetween = 0,
  cardItems,
  children,
  paginationId,
}: CardGroupSlideProps<TNearStore>) {
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
      {cardItems.map((cardItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={index}>
          <StoreCard cardItem={cardItem} />
        </SwiperSlide>
      ))}
      {children}
    </Swiper>
  );
}

export default CardGroupSlide;
