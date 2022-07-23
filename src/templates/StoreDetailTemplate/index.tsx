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
        <StoreInfo storeName={storeName} />
        <S.StoreDetailMapWrapper>
          <StoreDetailMap latitude={storeDetailData?.latitude} longitude={storeDetailData?.longitude} />
        </S.StoreDetailMapWrapper>
        {/* <img
          alt="map"
          style={{ width: '73.5rem' }}
          // eslint-disable-next-line max-len
          src="https://devtalk.kakao.com/uploads/default/original/2X/7/7db951d2d9d5f686c61df08e2eb8ce5e294ddf1d.PNG"
        /> */}
      </S.InfoWrapper>
      <S.StoreReviewsContainer>
        <StoreReviewsList />
      </S.StoreReviewsContainer>
    </S.Container>
  );
}

export default StoreDetailTemplate;
