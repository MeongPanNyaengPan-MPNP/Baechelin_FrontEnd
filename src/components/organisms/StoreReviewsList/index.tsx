import React from 'react';

import StoreReviewEmpty from '@molecules/StoreReviewEmpty';
import StoreReviewsTitle from '@molecules/StoreReviewsTitle';

import * as S from './styles';

function StoreReviewsList() {
  const ReviewList = [];
  return (
    <S.Container>
      <StoreReviewsTitle />
      {ReviewList.length === 0 && <StoreReviewEmpty />}
    </S.Container>
  );
}

export default StoreReviewsList;
