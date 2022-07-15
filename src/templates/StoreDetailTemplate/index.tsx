import StoreInfo from '@organisms/StoreInfo';
import StoreReviewsList from '@organisms/StoreReviewsList';
import React from 'react';
import * as S from './styles';

export interface StoreDetailProps {
  storeName: string | undefined;
}

function StoreDetailTemplate({ storeName }: StoreDetailProps) {
  return (
    <S.Container>
      <S.InfoWrapper>
        <StoreInfo storeName={storeName} />
        <img
          alt="map"
          style={{ width: '73.5rem' }}
          // eslint-disable-next-line max-len
          src="https://devtalk.kakao.com/uploads/default/original/2X/7/7db951d2d9d5f686c61df08e2eb8ce5e294ddf1d.PNG"
        />
      </S.InfoWrapper>
      <S.StoreReviewsContainer>
        <StoreReviewsList />
      </S.StoreReviewsContainer>
    </S.Container>
  );
}

export default StoreDetailTemplate;
