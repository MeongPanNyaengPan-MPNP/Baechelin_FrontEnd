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
import Span from '@atoms/Span';
import { UserInfoType } from '@interfaces/TokenType';
import * as S from './styles';

export interface MainTemplateProps {
  slideItems: ThumbNailProps[];
  filters: FiltersType;
  userInfo: UserInfoType | undefined;
}

function MainTemplates({ slideItems, filters, userInfo }: MainTemplateProps) {
  return (
    <S.Wrapper>
      <MainVisualSlide slideItems={slideItems} />
      <S.StoreCategorySnbArea>
        <StoreCategorySnb filters={filters} showMapButton />
      </S.StoreCategorySnbArea>
      <MainSlideSection
        slideId="arroundStore"
        paginationId="arroundStorePagination"
        queryKey={STORE_LIST.ARROUND_STORE}
        listTopic={STORE_TOPIC.ARROUND}
        slidesPerView={4}
        spaceBetween={40}
        autoplayDelay={4000}
        hiddenNoLocationState
        size="M"
      >
        <h5>
          <Link to={`/store/list/${STORE_TOPIC.ARROUND}`}>
            {userInfo?.name ? (
              <Span fontSize="2.4rem" fontWeight="bold">
                <>
                  {userInfo?.name}님의 {STORE_LIST_TITLE.ARROUND}
                </>
              </Span>
            ) : (
              <Span fontSize="2.4rem" fontWeight="bold">
                <>나의 {STORE_LIST_TITLE.ARROUND}</>
              </Span>
            )}
          </Link>
        </h5>
      </MainSlideSection>
      <MainSlideSection
        slideId="bestScore"
        paginationId="bestScorePagination"
        queryKey={STORE_LIST.BEST_POINT_STORE}
        listTopic={STORE_TOPIC.POINT}
        slidesPerView={3}
        spaceBetween={40}
        autoplayDelay={8000}
        size="L"
      >
        <h5>
          <Link to={`/store/list/${STORE_TOPIC.POINT}`}>{STORE_LIST_TITLE.POINT}</Link>
        </h5>
      </MainSlideSection>
      <MainSlideSection // 가까운순
        slideId="bookMark"
        paginationId="bookMarkPagination"
        queryKey={STORE_LIST.BEST_BOOKMARK_STORE}
        listTopic={STORE_TOPIC.BOOKMARK}
        slidesPerView={4}
        spaceBetween={40}
        autoplayDelay={4000}
        size="M"
      >
        <Link to={`/store/list/${STORE_TOPIC.BOOKMARK}`}>{STORE_LIST_TITLE.BOOKMARK}</Link>
      </MainSlideSection>
      <S.MainReviewListSection>
        <h5>
          <Span fontSize="2.4rem" fontWeight="bold" display="block" textAlign="center" margin="0 0 30px">
            {STORE_LIST_TITLE.RECENT_REVIEW}
          </Span>
        </h5>
        <ReviewGroupSlide // 가까운순
          slideId="reviewList"
          slidesPerView={2}
          spaceBetween={40}
          speed={20000}
          autoplayDelay={1}
          slidesPerGroup={1}
          hasNavigation={false}
          showTagList={false}
          size="M"
        />
      </S.MainReviewListSection>
    </S.Wrapper>
  );
}

export default MainTemplates;
