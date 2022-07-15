import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import React from 'react';
import * as S from './styles';

function StoreInfoContent() {
  const icons = ['local_parking', 'wheelchair_pickup', 'accessible_forward'];

  return (
    <S.Container>
      <S.Wrapper>
        <Icon iconName="location_on" size="2.4rem" margin="0 1.2rem 0 0" />
        <Span fontSize="2rem">경기도 화성시 항해동 11-12 1층</Span>
      </S.Wrapper>
      <S.Wrapper>
        <Icon iconName="local_phone" size="2.4rem" margin="0 1.2rem 0 0" />
        <Span fontSize="2rem">010-1234-5678</Span>
      </S.Wrapper>
      <S.IconsWrapper>
        {icons.map((v) => (
          <Icon iconName={v} size="3.6rem" margin="0 1.4rem 0 0" key={v} />
        ))}
      </S.IconsWrapper>
    </S.Container>
  );
}

export default StoreInfoContent;
