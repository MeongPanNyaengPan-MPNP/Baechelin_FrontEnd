import React from 'react';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';

import * as S from './styles';

interface ProfileBookmarkContentProps {
  name?: string;
  rate?: string | number;
  address?: string;
  phone?: string;
  photo?: string;
}

function ProfileBookmarkContent({
  name = '배슐랭',
  rate = '3',
  address = '경기도 성남시 대왕판교로 211',
  phone = '032-1135-1311',
  photo = 'https://content.api.news/v3/images/bin/104903dc87c2963a2d3e722aa85fe923?width=650',
}: ProfileBookmarkContentProps) {
  return (
    <S.Container>
      <S.Photo src={photo} />
      <S.Wrapper>
        <S.InfoTitleWrapper>
          <Span fontSize="1.4rem">{name}</Span>
          <S.CountWrapper>
            <Icon iconName="star" color="#ED6F2A" size="1.5rem" margin="0 0.3rem 0 0.7rem" />
            <Span>{rate}</Span>
          </S.CountWrapper>
        </S.InfoTitleWrapper>
        <S.InfoWrapper>
          <Icon iconName="location_on" size="1rem" margin="0 0.5rem 0 0" />
          <Span fontSize="1rem" fontWeight="100">
            {address}
          </Span>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <Icon iconName="local_phone" size="1rem" margin="0 0.5rem 0 0" />
          <Span fontSize="1rem" fontWeight="100">
            {phone}
          </Span>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.Container>
  );
}

export default ProfileBookmarkContent;
