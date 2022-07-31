import React from 'react';
import { useParams } from 'react-router-dom';

import StoreDetailTemplate from '@templates/StoreDetailTemplate';

import * as S from './styles';

function StoreDetail() {
  const { storeId } = useParams();

  return (
    <S.Container>
      <StoreDetailTemplate storeName={storeId} />
    </S.Container>
  );
}

export default StoreDetail;
