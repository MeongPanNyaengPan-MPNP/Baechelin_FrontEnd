import React from 'react';
import { useNavigate } from 'react-router-dom';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';

import { IMAGE_URL } from '@constants/url';
import * as S from './styles';

interface ProfileBookmarkContentProps {
  name?: string;
  rate?: string | number;
  address?: string;
  phone?: string;
  photo?: string | undefined;
  storeId?: number;
}

function ProfileBookmarkContent({
  name = '배슐랭',
  rate = '3',
  address = '경기도 성남시 대왕판교로 211',
  phone = '032-1135-1311',
  photo = IMAGE_URL.NO_IMAGE,
  storeId,
}: ProfileBookmarkContentProps) {
  const navigate = useNavigate();

  const onClickStore = () => {
    navigate(`/store/${storeId}`);
  };

  return (
    <S.Container onClick={onClickStore} className="bookmark_container">
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
          <Icon iconName="location_on" size="1.2rem" margin="0 0.5rem 0 0" />
          <Span fontSize="1.2rem" fontWeight="100">
            {address}
          </Span>
        </S.InfoWrapper>
        {phone && (
          <S.InfoWrapper>
            <Icon iconName="local_phone" size="1.2rem" margin="0 0.5rem 0 0" />
            <Span fontSize="1.2rem" fontWeight="100">
              {phone}
            </Span>
          </S.InfoWrapper>
        )}
      </S.Wrapper>
    </S.Container>
  );
}

export default ProfileBookmarkContent;
