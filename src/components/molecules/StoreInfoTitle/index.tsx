import React from 'react';
import { UseMutateFunction } from 'react-query';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';
import Bookmark from '@molecules/Bookmark';

import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import * as S from './styles';

interface StoreInfoTitleProps {
  storeDetailData?: StoreMapResponseTypes;
  fetchCreateBookmarkStore?: UseMutateFunction<CreateBookmarkFolderResponse, unknown, CreateBookmarkStoreBody, unknown>;
  categoryShow?: boolean;
  bookmarkShow?: boolean;
}

function StoreInfoTitle({
  storeDetailData,
  fetchCreateBookmarkStore,
  bookmarkShow = true,
  categoryShow = true,
}: StoreInfoTitleProps) {
  const onClickIcon = () => {};

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
            <Span fontSize="3.2rem">{storeDetailData?.name}</Span>
            <S.RateArea>
              <Icon iconName="star" color="#ED6F2A" size="2.4rem" onClick={onClickIcon} margin="0 0.5rem 0 0" />
              <Span fontSize="2rem">{storeDetailData?.pointAvg}</Span>
            </S.RateArea>
          </h2>
        </div>
      </S.TitleWrapper>
      {bookmarkShow && (
        <S.BookmarkArea>
          <Bookmark
            size="3.2rem"
            marked={storeDetailData?.bookmark}
            storeIdProps={storeDetailData?.storeId}
            fetchCreateBookmarkStore={fetchCreateBookmarkStore}
          />
        </S.BookmarkArea>
      )}
    </S.Container>
  );
}

export default StoreInfoTitle;
