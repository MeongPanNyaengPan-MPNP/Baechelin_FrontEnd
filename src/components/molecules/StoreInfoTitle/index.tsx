import React from 'react';

import Span from '@atoms/Span';
import Icon from '@atoms/Icon';
import Bookmark from '@molecules/Bookmark';

import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import * as S from './styles';

interface StoreInfoTitleProps {
  storeDetailData?: StoreMapResponseTypes;
  categoryShow?: boolean;
  bookmarkShow?: boolean;
}

function StoreInfoTitle({ storeDetailData, bookmarkShow = true, categoryShow = true }: StoreInfoTitleProps) {
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
          <Bookmark size="2.6rem" marked={storeDetailData?.bookmark} storeIdProps={storeDetailData?.storeId} />
        </S.BookmarkArea>
      )}
    </S.Container>
  );
}

export default StoreInfoTitle;
