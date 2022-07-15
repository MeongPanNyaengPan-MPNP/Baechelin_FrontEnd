import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import StoreDetailTemplate from '@templates/StoreDetailTemplate';
import { getStoreDetail } from '@service/storeDetailApi';

import * as S from './styles';

function StoreDetail() {
  const { storeName } = useParams();

  const { data } = useQuery(['getShopDetail'], () => getStoreDetail(Number(storeName)));
  console.log('storedata', data);

  return (
    <S.Container>
      <StoreDetailTemplate storeName={storeName} />
    </S.Container>
  );
}

export default StoreDetail;
