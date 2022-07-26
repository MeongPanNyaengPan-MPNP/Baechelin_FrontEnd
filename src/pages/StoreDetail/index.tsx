import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import StoreDetailTemplate from '@templates/StoreDetailTemplate';
import { getStoreDetail } from '@service/storeDetailApi';

import * as S from './styles';

function StoreDetail() {
  const { storeName } = useParams();

  useQuery(['getShopDetail', storeName], () => getStoreDetail(Number(storeName)), {
    // eslint-disable-next-line object-curly-newline
    staleTime: 5000,
    cacheTime: Infinity,
    enabled: !!storeName,
  });
  return (
    <S.Container>
      <StoreDetailTemplate storeName={storeName} />
    </S.Container>
  );
}

export default StoreDetail;
