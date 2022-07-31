import StoreInfoContent from '@molecules/StoreInfoContent';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import StoreInfoTitle from '@molecules/StoreInfoTitle';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getStoreDetail } from '@service/storeDetailApi';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import { createBookmarkStore } from '@service/bookmarkApi';

import * as S from './styles';

interface StoreInfoProps {
  storeName?: string | undefined;
  size?: 'big' | 'regular' | 'small' | 'xsmall';
  align?: string;
}

function StoreInfo({ storeName, align, size = 'big' }: StoreInfoProps) {
  const location = useLocation();

  const { data: storeDetailData, refetch }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
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

  return (
    /* 가게 상세페이지 형태 */
    <S.Container size={size} align={align}>
      <>
        <StoreInfoTitle storeDetailData={storeDetailData} fetchCreateBookmarkStore={fetchCreateBookmarkStore} />
        <StoreInfoContent storeDetailData={storeDetailData} />
        <StoreInfoPhotos location={location} storeDetailData={storeDetailData} />
      </>
    </S.Container>
  );
}

export default StoreInfo;
