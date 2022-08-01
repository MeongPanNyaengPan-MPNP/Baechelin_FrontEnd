import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';
import Bookmark from '@molecules/Bookmark';

import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import { createBookmarkStore } from '@service/bookmarkApi';
import * as S from './styles';

interface StoreInfoTitleProps {
  storeDetailData?: StoreMapResponseTypes;
  categoryShow?: boolean;
  bookmarkShow?: boolean;
}

function StoreInfoTitle({ storeDetailData, bookmarkShow = true, categoryShow = true }: StoreInfoTitleProps) {
  const queryClient = useQueryClient();
  const [bookmarkStatus, setBookmarkStatus] = useState(storeDetailData?.bookmark);
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
        setBookmarkStatus('Y');
        queryClient.invalidateQueries('getBookmarkTop');
      },
      onError: (err) => {
        console.error(err);
      },
    },
  );
  return (
    <S.Container>
      <S.TitleWrapper>
        {categoryShow && (
          <S.Category>
            <Span fontSize="1.6rem">{storeDetailData?.category}</Span>
          </S.Category>
        )}

        <div className="title">
          <h2>
            <Span fontWeight="bold" fontSize="2.8rem">
              {storeDetailData?.name}
            </Span>
            <S.RateArea>
              <Icon iconName="star" color="#ED6F2A" size="2.4rem" margin="0 0.5rem 0 0" />
              <Span fontSize="2rem">{storeDetailData?.pointAvg}</Span>
            </S.RateArea>
          </h2>
        </div>
      </S.TitleWrapper>
      {bookmarkShow && (
        <S.BookmarkArea>
          <Bookmark
            size="2.6rem"
            marked={bookmarkStatus}
            storeIdProps={storeDetailData?.storeId}
            fetchCreateBookmarkStore={fetchCreateBookmarkStore}
          />
        </S.BookmarkArea>
      )}
    </S.Container>
  );
}

export default StoreInfoTitle;
