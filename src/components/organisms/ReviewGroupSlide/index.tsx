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
import { StoreReviewResponseTypes } from '@interfaces/ReviewTypes';
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
  slidesPerGroup = slidesPerView,
  hasNavigation = true,
}: CardGroupSlideProps) {
  const data: StoreReviewResponseTypes[] = [
    {
      storeName: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 2092390,
      userId: 291391,
      address: '주소',
    },
    {
      storeName: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 1231231,
      userId: 291391,
      address: '주소',
    },
    {
      storeName: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 5435643,
      userId: 291391,
      address: '주소',
    },
    {
      storeName: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 4234,
      userId: 291391,
      address: '주소',
    },
    {
      storeName: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 209213122390,
      userId: 291391,
      address: '주소',
    },
    {
      storeName: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 21092390,
      userId: 291391,
      address: '주소',
    },
  ];
  const { UseRecentReviewForMain } = UseReviewList();
  const { data: recentReviewData, isLoading } = UseRecentReviewForMain<StoreReviewResponseTypes[]>(
    REVIEW.RECENT_REVIEW_LIST,
  );
  console.log('recentReviewData', recentReviewData);

  const PrevButtonId = `${slideId}PrevButton`;
  const NextButtonId = `${slideId}NextButton`;
  return (
    <S.CardSlideGroup id={slideId} paginationId={paginationId}>
      {data && data?.length > 0 ? (
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
            loop={data.length >= slidesPerView}
          >
            {data?.map((reviewItem) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={reviewItem.storeId}>
                <ReviewCard {...reviewItem} />
              </SwiperSlide>
            ))}
            {children}
            {paginationId && <SlidePagination paginationLength={data.length} paginationId={paginationId} />}
          </Swiper>
          {hasNavigation && <SlideButtonsArea hover prevId={PrevButtonId} nextId={NextButtonId} />}
        </>
      ) : (
        <>
          {data?.length === 0 && <NoDataMessage message={['리뷰가 없습니다']} />}
          {isLoading && <NoDataMessage message={['isLoading']} />}
          <NoDataMessage message={['isError']} />
        </>
      )}
    </S.CardSlideGroup>
  );
}

export default ReviewGroupSlide;
