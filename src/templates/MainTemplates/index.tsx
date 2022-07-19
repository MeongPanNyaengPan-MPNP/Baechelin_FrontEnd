// TODO : peinding 로딩 만들어서 데이터 없을 때 swiper 처리

import MainVisualSlide from '@organisms/MainVisualSlide';
import React from 'react';
import { ThumbNailProps } from '@atoms/Thumbnail';
import { CheckBoxType } from '@interfaces/formTypes';
import StoreCategorySnb from '@organisms/StoreCategorySnb';
import CardGroupSlide from '@organisms/CardGroupSlide';
import Link from '@atoms/Link';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import NoDataMessage from '@molecules/NodataMessage';
import GetPositionButton from '@molecules/GetPositionButton';
import ReviewGroupSlide from '@organisms/ReviewGroupSlide';
import { StoreResponseTypes } from '@interfaces/StoreResponseTypes';
import * as S from './styles';

export interface MainTemplateProps {
  slideItems: ThumbNailProps[];
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
  arroundStoreItems: StoreResponseTypes[] | undefined;
  reviewList: StoreResponseTypes[] | undefined;
  userLocationState: UserLoctaionType | undefined;
  arroundStoreItemState: boolean;
  refetch: any;
}

function MainTemplates({
  slideItems,
  cateItems,
  facilityItems,
  userLocationState,
  refetch,
  arroundStoreItemState,
  arroundStoreItems = [],
  reviewList = [],
}: MainTemplateProps) {
  return (
    <S.Wrapper>
      <MainVisualSlide slideItems={slideItems} />
      <S.StoreCategorySnbArea>
        <StoreCategorySnb refetch={refetch} cateItems={cateItems} facilityItems={facilityItems} />
      </S.StoreCategorySnbArea>
      <S.MainStoreListSection>
        {arroundStoreItemState && userLocationState !== null ? (
          <>
            <Link to="/">배슐랭님 주변 밥집</Link>
            <CardGroupSlide<StoreResponseTypes> // 가까운순
              cardItems={arroundStoreItems}
              paginationId="arroundStorePagination"
              slideId="arroundStore"
              slidesPerView={4}
              spaceBetween={40}
              autoplayDelay={6000}
              size="M"
            />
          </>
        ) : (
          <NoDataMessage message={['Loading']} />
        )}
      </S.MainStoreListSection>
      <S.MainStoreListSection>
        <Link to="/">별점이 높은 가게</Link>
        {arroundStoreItemState && userLocationState !== null ? (
          <CardGroupSlide<StoreResponseTypes> // 가까운순
            cardItems={arroundStoreItems}
            paginationId="bestScorePagination"
            slideId="arroundStore2"
            slidesPerView={3}
            spaceBetween={40}
            autoplayDelay={6000}
            size="L"
          />
        ) : (
          <NoDataMessage message={['Loading']} />
        )}
      </S.MainStoreListSection>
      <S.MainStoreListSection>
        <Link to="/">저장 많이한 가게</Link>
        {arroundStoreItemState && userLocationState !== null ? (
          <CardGroupSlide<StoreResponseTypes> // 가까운순
            cardItems={arroundStoreItems}
            paginationId="bestBookMarkPagination"
            slideId="bestBookMark"
            slidesPerView={4}
            spaceBetween={40}
            autoplayDelay={3000}
            size="M"
          />
        ) : (
          <NoDataMessage message={['Loading']} />
        )}
      </S.MainStoreListSection>
      <S.MainStoreListSection>
        <Link to="/">실시간 맛집 후기</Link>
        {arroundStoreItems !== undefined && (
          <ReviewGroupSlide<StoreResponseTypes> // 가까운순
            cardItems={reviewList}
            paginationId="reviewListPagination"
            slideId="reviewList"
            slidesPerView={4}
            spaceBetween={40}
            size="M"
          />
        )}
      </S.MainStoreListSection>
      {userLocationState === null && (
        <NoDataMessage
          message={['사용자의 위치정보가 없습니다.', '위치정보를 설정하시면 내 주변의 맛집을 찾을 수 있습니다.']}
          buttonChildren={<GetPositionButton />}
        />
      )}
    </S.Wrapper>
  );
}

export default MainTemplates;
