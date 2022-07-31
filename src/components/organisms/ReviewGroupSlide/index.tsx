import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { CardStylesProps } from '@molecules/StoreCard';
import SlidePagination from '@atoms/SlidePagination';
import SlideButtonsArea from '@molecules/SlideButtons';
import ReviewCard from '@molecules/ReviewCard';
import { UseReviewList } from '@hooks/UseQueryHooks';
import { REVIEW } from '@constants/index';
import NoDataMessage from '@molecules/NodataMessage';
import { ReviewResponseDtoItem } from '@interfaces/ReviewTypes';
import { Link } from 'react-router-dom';
import * as S from './styles';

export type CardGroupSlideProps = {
  slidesPerView?: number;
  spaceBetween?: number;
  paginationId?: string;
  children?: ReactNode;
  slideId: string;
  hasNavigation?: boolean;
  autoplayDelay?: number;
  slidesPerGroup?: number;
  speed?: number;
  showTagList?: boolean;
} & CardStylesProps;

// 리뷰 리스트 더미 데이터

function ReviewGroupSlide({
  slidesPerView = 4,
  spaceBetween = 0,
  children,
  paginationId,
  slideId = 'slide',
  autoplayDelay,
  speed = 1000,
  showTagList = true,
  slidesPerGroup = slidesPerView,
  hasNavigation = true,
}: CardGroupSlideProps) {
  const { UseRecentReviewForMain } = UseReviewList();
  const { isLoading, data: recentReviewData } = UseRecentReviewForMain<ReviewResponseDtoItem[]>(
    REVIEW.RECENT_REVIEW_LIST,
  );

  const PrevButtonId = `${slideId}PrevButton`;
  const NextButtonId = `${slideId}NextButton`;
  return (
    <S.CardSlideGroup id={slideId} paginationId={paginationId}>
      {recentReviewData && recentReviewData?.length > 0 ? (
        <>
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
            loop={recentReviewData.length >= slidesPerView}
          >
            {recentReviewData?.map((reviewItem, index) => (
              <SwiperSlide key={`${reviewItem?.createdAt?.toString() || index}`}>
                <Link to={`/store/${reviewItem.storeId}`}>
                  <ReviewCard {...reviewItem} useModal={false} showTagList={showTagList} />
                </Link>
              </SwiperSlide>
            ))}
            {children}
            {paginationId && <SlidePagination paginationLength={recentReviewData.length} paginationId={paginationId} />}
          </Swiper>
          {hasNavigation && <SlideButtonsArea hover prevId={PrevButtonId} nextId={NextButtonId} />}
        </>
      ) : (
        <>
          {recentReviewData?.length === 0 && <NoDataMessage message={['리뷰가 없습니다']} />}
          {isLoading && <NoDataMessage message={['isLoading']} />}
          <NoDataMessage message={['isError']} />
        </>
      )}
    </S.CardSlideGroup>
  );
}

export default ReviewGroupSlide;
