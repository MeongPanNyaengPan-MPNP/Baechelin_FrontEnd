import MainVisualSlide from '@organisms/MainVisualSlide';
import React from 'react';
import { ThumbNailProps } from '@atoms/Thumbnail';
import { CheckBoxType } from '@interfaces/formTypes';
import StoreCategorySnb from '@organisms/StoreCategorySnb';
import CardGroupSlide from '@organisms/CardGroupSlide';
import Container from '@mui/material/Container';
import { FacilityTypes, StoreBasicInfoTypes } from '@interfaces/StoreTypes';
import Link from '@atoms/Link';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import * as S from './styles';

export type ArroundStoreType = FacilityTypes & StoreBasicInfoTypes;

export interface MainTemplateProps {
  slideItems: ThumbNailProps[];
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
  arroundStoreItems: Array<ArroundStoreType>;
  userLocation: UserLoctaionType;
}

function MainTemplates({ slideItems, cateItems, userLocation, facilityItems, arroundStoreItems }: MainTemplateProps) {
  console.log('userLocation', userLocation);
  return (
    <S.Container>
      <MainVisualSlide slideItems={slideItems} />
      <S.StoreCategorySnbArea>
        <StoreCategorySnb cateItems={cateItems} facilityItems={facilityItems} />
      </S.StoreCategorySnbArea>
      <Container>
        <S.MainStoreListSection>
          {userLocation && (
            <>
              <Link to="/">배슐랭님 주변 밥집</Link>
              <CardGroupSlide<ArroundStoreType> // 가까운순
                cardItems={arroundStoreItems}
                paginationId="arroundStorePagination"
                slideId="arroundStore"
                slidesPerView={4}
                spaceBetween={40}
                size="M"
              />
            </>
          )}
        </S.MainStoreListSection>
        <S.MainStoreListSection>
          <Link to="/">별점이 높은 가게 </Link>
          <CardGroupSlide<ArroundStoreType> // 가까운순
            cardItems={arroundStoreItems}
            slideId="bestScore"
            paginationId="bestScorePagination"
            slidesPerView={3}
            spaceBetween={40}
            size="L"
          />
        </S.MainStoreListSection>
        <S.MainStoreListSection>
          <Link to="/">저장 많이한 가게</Link>
          <CardGroupSlide<ArroundStoreType> // 가까운순
            cardItems={arroundStoreItems}
            slideId="bestBookMark"
            paginationId="bestBookMarkPagination"
            slidesPerView={4}
            spaceBetween={40}
            size="M"
          />
        </S.MainStoreListSection>
      </Container>
    </S.Container>
  );
}

export default MainTemplates;
