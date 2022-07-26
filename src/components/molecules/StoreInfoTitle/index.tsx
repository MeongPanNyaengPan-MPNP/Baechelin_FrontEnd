import React from 'react';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';

import { useQuery } from 'react-query';
import { getStoreDetail } from '@service/storeDetailApi';
import Bookmark from '@molecules/Bookmark';

import * as S from './styles';

interface StoreInfoTitleProps {
  storeName: string | undefined;
}

function StoreInfoTitle({ storeName }: StoreInfoTitleProps) {
  const { data: storeDetailData }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
      enabled: !!storeName,
    },
  );
  const onClickIcon = () => {};

  return (
    <S.Container>
      <S.TitleWrapper>
<<<<<<< HEAD
        <Span fontSize="4rem">{storeDetailData?.name}</Span>
        <Bookmark size="4rem" />
=======
        <Span fontSize="3.2rem">{storeDetailData?.name}</Span>
        <Icon iconName="bookmark" color="#ED6F2A" size="4rem" cursor="pointer" />
>>>>>>> bff30b4e7c899735e3f44cb5520f6b83a96d7447
      </S.TitleWrapper>
      <S.Wrapper>
        <Icon iconName="star" color="#ED6F2A" size="2rem" onClick={onClickIcon} margin="0 0.5rem 0 0" />
        <Span fontSize="2rem">3.5</Span>
      </S.Wrapper>
    </S.Container>
  );
}

export default StoreInfoTitle;
