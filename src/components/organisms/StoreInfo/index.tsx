import StoreInfoContent from '@molecules/StoreInfoContent';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import StoreInfoTitle from '@molecules/StoreInfoTitle';
import React from 'react';
import * as S from './styles';

interface StoreInfoProps {
  storeName: string | undefined;
}

function StoreInfo({ storeName }: StoreInfoProps) {
  console.log('storeName', storeName);
  return (
    <S.Container>
      <StoreInfoTitle storeName={storeName} />
      <StoreInfoContent storeName={storeName} />
      <StoreInfoPhotos />
    </S.Container>
  );
}

export default StoreInfo;
