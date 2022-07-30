import React from 'react';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';

import { useMutation, useQuery } from 'react-query';
import { getStoreDetail } from '@service/storeDetailApi';
import Bookmark from '@molecules/Bookmark';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import { createBookmarkStore } from '@service/bookmarkApi';

import { Color } from '@constants/styles';
import * as S from './styles';

interface StoreInfoTitleProps {
  storeName: string | undefined;
}

function StoreInfoTitle({ storeName }: StoreInfoTitleProps) {
  const { data: storeDetailData, refetch }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
      enabled: !!storeName,
    },
  );

  const { mutate: fetchCreateBookmarkStore } = useMutation<
    CreateBookmarkFolderResponse,
    unknown,
    CreateBookmarkStoreBody,
    unknown
  >(
    ({ storeId, folderId }) =>
      createBookmarkStore({
        folderId,
        storeId,
      }),
    {
      onSuccess: () => {
        // setCreate(false);
        refetch();
        console.log('bookmark created');
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );

  const bookmarkColor: string = storeDetailData?.bookmark === 'Y' ? Color.orange : Color.darkGrey;
  console.log(storeDetailData);
  const onClickIcon = () => {};

  return (
    <S.Container>
      <S.TitleWrapper>
        <h2>
          <Span fontSize="3.2rem">{storeDetailData?.name}</Span>
        </h2>

        <Bookmark
          size="3.2rem"
          marked={bookmarkColor}
          storeIdProps={storeDetailData?.storeId}
          fetchCreateBookmarkStore={fetchCreateBookmarkStore}
        />
      </S.TitleWrapper>
      <S.Wrapper>
        <Icon iconName="star" color="#ED6F2A" size="2rem" onClick={onClickIcon} margin="0 0.5rem 0 0" />
        <Span fontSize="2rem">{storeDetailData?.pointAvg}</Span>
      </S.Wrapper>
    </S.Container>
  );
}

export default StoreInfoTitle;
