import MainVisualSlide from '@organisms/MainVisualSlide';
import React from 'react';
import { ThumbNailProps } from '@atoms/Thumbnail';
import { CheckBoxType } from '@interfaces/formTypes';
import StoreCategorySnb from '@organisms/StoreCategorySnb';
import CardGroupSlide from '@organisms/CardGroupSlide';
import Link from '@atoms/Link';
import NoDataMessage from '@molecules/NodataMessage';
import GetPositionButton from '@molecules/GetPositionButton';
import { StoreBasicInfoTypes } from '@interfaces/StoreTypes';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import * as S from './styles';

export interface MainTemplateProps {
  slideItems: ThumbNailProps[];
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
  arroundStoreItems: StoreBasicInfoTypes[] | undefined;
  userLocationState: UserLoctaionType;
  refetch: any;
}

function MainTemplates({
  slideItems,
  cateItems,
  facilityItems,
  arroundStoreItems,
  userLocationState,
  refetch,
}: MainTemplateProps) {
  return (
    <S.Wrapper>
      <MainVisualSlide slideItems={slideItems} />
      <S.StoreCategorySnbArea>
        <StoreCategorySnb refetch={refetch} cateItems={cateItems} facilityItems={facilityItems} />
      </S.StoreCategorySnbArea>
      <S.MainStoreListSection>
        {userLocationState !== null && arroundStoreItems !== undefined ? (
          <>
            <Link to="/">배슐랭님 주변 밥집</Link>
            <CardGroupSlide<StoreBasicInfoTypes> // 가까운순
              cardItems={arroundStoreItems}
              paginationId="arroundStorePagination"
              slideId="arroundStore"
              slidesPerView={4}
              spaceBetween={40}
              size="M"
            />
          </>
        ) : (
          <NoDataMessage
            message={['사용자의 위치정보가 없습니다.', '위치정보를 설정하시면 내 주변의 맛집을 찾을 수 있습니다.']}
            buttonChildren={<GetPositionButton />}
          />
        )}
      </S.MainStoreListSection>
      <S.MainStoreListSection>
        <Link to="/">별점이 높은 가게 </Link>
        {arroundStoreItems !== undefined && (
          <CardGroupSlide<StoreBasicInfoTypes> // 가까운순
            cardItems={arroundStoreItems}
            paginationId="bestScoreStorePatination"
            slideId="bestScoreStore"
            slidesPerView={3}
            spaceBetween={40}
            size="L"
          />
        )}
      </S.MainStoreListSection>
      <S.MainStoreListSection>
        <Link to="/">저장 많이한 가게</Link>
        {arroundStoreItems !== undefined && (
          <CardGroupSlide<StoreBasicInfoTypes> // 가까운순
            cardItems={arroundStoreItems}
            paginationId="bestBookMarkPagination"
            slideId="bestBookMark"
            slidesPerView={4}
            spaceBetween={40}
            size="M"
          />
        )}
      </S.MainStoreListSection>
    </S.Wrapper>
  );
}

export default MainTemplates;
