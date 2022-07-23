// TODO : peinding 로딩 만들어서 데이터 없을 때 swiper 처리
// TODO : SKELETON UI
import MainVisualSlide from '@organisms/MainVisualSlide';
import React from 'react';
import { ThumbNailProps } from '@atoms/Thumbnail';
import StoreCategorySnb, { FiltersType } from '@organisms/StoreCategorySnb';
import Link from '@atoms/Link';
import ReviewGroupSlide from '@organisms/ReviewGroupSlide';
import MainSlideSection from '@organisms/MainSlideSection';
import { STORE_LIST, STORE_LIST_TITLE, STORE_TOPIC } from '@constants/index';
import * as S from './styles';

export interface MainTemplateProps {
  slideItems: ThumbNailProps[];
  filters: FiltersType;
}

function MainTemplates({
                         slideItems,
                         filters,
                       }: MainTemplateProps) {
  return (
    <S.Wrapper>
      <MainVisualSlide slideItems={slideItems} />
      <S.StoreCategorySnbArea>
        <StoreCategorySnb filters={filters} />
      </S.StoreCategorySnbArea>
      <MainSlideSection
        slideId='arroundStore'
        paginationId='arroundStorePagination'
        queryKey={STORE_LIST.ARROUND_STORE}
        listTopic={STORE_TOPIC.ARROUND}
        slidesPerView={4}
        spaceBetween={40}
        autoplayDelay={3000}
        hiddenNoLocationState
        size='M'
      >
        <Link to={`/store/list/${STORE_TOPIC.ARROUND}`}>배슐랭{STORE_LIST_TITLE.ARROUND}</Link>
      </MainSlideSection>
      <MainSlideSection
        slideId='bestScore'
        paginationId='bestScorePagination'
        queryKey={STORE_LIST.BEST_POINT_STORE}
        listTopic={STORE_TOPIC.POINT}
        slidesPerView={3}
        spaceBetween={40}
        autoplayDelay={6000}
        size='L'
      >
        <Link to={`/store/list/${STORE_TOPIC.POINT}`}>{STORE_LIST_TITLE.POINT}</Link>
      </MainSlideSection>
      <MainSlideSection // 가까운순
        slideId='bookMark'
        paginationId='bookMarkPagination'
        queryKey={STORE_LIST.BEST_BOOKMARK_STORE}
        listTopic={STORE_TOPIC.BOOKMARK}
        slidesPerView={3}
        spaceBetween={40}
        autoplayDelay={6000}
        size='L'
      >
        <Link to={`/store/list/${STORE_TOPIC.BOOKMARK}`}>{STORE_LIST_TITLE.BOOKMARK}</Link>
      </MainSlideSection>
      <S.MainReviewListSection>
        <Link to='/'>{STORE_LIST_TITLE.RECENT_REVIEW}</Link>
        <ReviewGroupSlide // 가까운순
          slideId='reviewList'
          slidesPerView={2}
          spaceBetween={40}
          speed={20000}
          autoplayDelay={1}
          slidesPerGroup={1}
          hasNavigation={false}
          size='M'
        />
      </S.MainReviewListSection>

    </S.Wrapper>
  );
}

export default MainTemplates;
