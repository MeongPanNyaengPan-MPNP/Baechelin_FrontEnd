import React from 'react';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';

import * as S from './styles';

function StoreInfoTitle() {
  const onClickIcon = () => {};

  return (
    <S.Container>
      <S.TitleWrapper>
        <Span fontSize="4rem">Baechelin</Span>
        <Icon iconName="bookmark" color="#FFCF23" size="4rem" cursor="pointer" />
      </S.TitleWrapper>
      <S.Wrapper>
        <Icon iconName="star" color="#FFCF23" size="2rem" onClick={onClickIcon} margin="0 0.5rem 0 0" />
        <Span fontSize="2rem">3.5</Span>
      </S.Wrapper>
    </S.Container>
  );
}

export default StoreInfoTitle;
