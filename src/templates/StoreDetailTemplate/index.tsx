import StoreDetailMap from '@molecules/StoreDetailMap';
import StoreInfo from '@organisms/StoreInfo';
import StoreReviewsList from '@organisms/StoreReviewsList';
import { getStoreDetail } from '@service/storeDetailApi';
import React from 'react';
import { useQuery } from 'react-query';
import * as S from './styles';

export interface StoreDetailProps {
  storeName: string | undefined;
}

function StoreDetailTemplate({ storeName }: StoreDetailProps) {
  const { data: storeDetailData }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
      enabled: !!storeName,
    },
  );

  return (
    <S.Container>
      <S.InfoWrapper>
        <StoreInfo storeName={storeName} type="vertical" />
        <S.StoreDetailMapWrapper>
          <StoreDetailMap latitude={storeDetailData?.latitude} longitude={storeDetailData?.longitude} />
        </S.StoreDetailMapWrapper>
      </S.InfoWrapper>
      <S.StoreReviewsContainer>
        <StoreReviewsList />
      </S.StoreReviewsContainer>
    </S.Container>
  );
}

export default StoreDetailTemplate;
