import StoreInfoContent from '@molecules/StoreInfoContent';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import StoreInfoTitle from '@molecules/StoreInfoTitle';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { getStoreDetail } from '@service/storeDetailApi';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import { createBookmarkStore } from '@service/bookmarkApi';

import * as S from './styles';

interface StoreInfoProps {
  storeName?: string | undefined;
  showIcons?: boolean;
  type: 'horizontal' | 'vertical';
  size?: 'big' | 'regular' | 'small' | 'xsmall';
  align?: string;
  storeItems?: StoreMapResponseTypes;
}

function StoreInfo({ storeName, showIcons, align, storeItems, type, size = 'big' }: StoreInfoProps) {
  const location = useLocation();

  const { data: storeDetailData, refetch }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
      enabled: !storeItems,
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
    <S.Container type={type} size={size} align={align}>
      {type === 'vertical' && size === 'big' && (
        <>
          <StoreInfoTitle
            storeDetailData={storeDetailData || storeItems}
            fetchCreateBookmarkStore={fetchCreateBookmarkStore}
          />
          <StoreInfoContent storeDetailData={storeDetailData || storeItems} />
          <StoreInfoPhotos location={location} storeDetailData={storeDetailData || storeItems} />
        </>
      )}
      {/* 리뷰쓰기, 가게 리스트 형태  // TODO : 북마크 예외처리하기 */}
      {type === 'horizontal' && (
        <>
          <StoreInfoPhotos
            location={location}
            storeDetailData={storeDetailData || storeItems}
            width="180px"
            tile={false}
          />
          <S.TextArea size={size}>
            <StoreInfoTitle
              storeDetailData={storeDetailData || storeItems}
              fetchCreateBookmarkStore={fetchCreateBookmarkStore}
            />
            <StoreInfoContent storeDetailData={storeDetailData || storeItems} showIcons={showIcons} />
          </S.TextArea>
        </>
      )}
    </S.Container>
  );
}

export default StoreInfo;
