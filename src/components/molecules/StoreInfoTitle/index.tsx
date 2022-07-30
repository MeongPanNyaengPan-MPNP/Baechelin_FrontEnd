import React from 'react';
import { UseMutateFunction } from 'react-query';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';
import Bookmark from '@molecules/Bookmark';

import { Color } from '@constants/styles';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';
import * as S from './styles';

interface StoreInfoTitleProps {
  storeDetailData?: StoreMapResponseTypes;
  fetchCreateBookmarkStore: UseMutateFunction<CreateBookmarkFolderResponse, unknown, CreateBookmarkStoreBody, unknown>;
}

function StoreInfoTitle({ storeDetailData, fetchCreateBookmarkStore }: StoreInfoTitleProps) {
  const bookmarkColor: string = storeDetailData?.bookmark === 'Y' ? Color.orange : Color.darkGrey;
  const onClickIcon = () => {};

  return (
    <S.Container>
      <S.TitleWrapper>
        <h2>
          <p>
            <Span fontSize="1.9rem">{storeDetailData?.category}</Span>
          </p>
          <p>
            <Span ellipsis={1} fontSize="3.2rem">
              {storeDetailData?.name}
            </Span>
          </p>
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
