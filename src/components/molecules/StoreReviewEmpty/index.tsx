import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import React from 'react';

import * as S from './styles';

function StoreReviewEmpty() {
  return (
    <S.Container>
      <Icon iconName="block" size="10rem" />
      <Span fontSize="2rem">등록된 방문 후기가 없습니다.</Span>
    </S.Container>
  );
}

export default StoreReviewEmpty;
