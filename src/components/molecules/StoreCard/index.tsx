import React, { useState } from 'react';
import ThumbNail from '@atoms/Thumbnail';
import Span from '@atoms/Span';
import Star from '@atoms/Star';
import Icon from '@atoms/Icon';
import Badge from '@atoms/Badge';
import { useNavigate } from 'react-router-dom';
import { StoreResponseTypes } from '@interfaces/StoreResponseTypes';
import Bookmark from '@molecules/Bookmark';
import { useMutation, useQueryClient } from 'react-query';
import { CreateBookmarkFolderResponse, CreateBookmarkStoreBody } from '@interfaces/BookmarkTypes';

import { createBookmarkStore } from '@service/bookmarkApi';
import SkeletonCard from '@atoms/SkeletonCard';
import * as S from './styles';

export type CardStylesProps = {
  size?: 'M' | 'L';
  isLoading?: boolean;
};

function StoreCard<T extends Partial<StoreResponseTypes>>(props: T & CardStylesProps) {
  const noImage = '/img/ui/no_picture.svg';
  const {
    storeId: id,
    size = 'M',
    name,
    address,
    category,
    phoneNumber,
    storeImgList = [noImage],
    pointAvg,
    elevator,
    toilet,
    parking,
    approach,
    bookmark,
    isLoading,
    heightDifferent,
  } = props;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [bookmarkStatus, setBookmarkStatus] = useState(bookmark);
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
    <S.CardItem size={size}>
      <S.CardFigureArea onClick={() => navigate(`/store/${id}`)}>
        {storeImgList.length < 1 ? (
          <ThumbNail
            isLoading={isLoading}
            hover
            alt={name}
            src={noImage}
            height="100%"
            imgWidth="270px"
            imgHeight="145px"
          />
        ) : (
          <ThumbNail
            isLoading={isLoading}
            hover
            alt={name}
            src={storeImgList[0]}
            height="100%"
            imgWidth="270px"
            imgHeight="145px"
          />
        )}
      </S.CardFigureArea>
      <S.CardContentArea>
        <S.CardContentAreaTop>
          <Span isLoading={isLoading} fontSize="1.2rem">
            <>
              {size === 'L' && <>{address} - </>}
              {category}
            </>
          </Span>
          <S.StoreNameArea>
            <S.StoreTitle>
              <Span isLoading={isLoading} fontSize="16px" fontWeight="bold">
                {name}
              </Span>
            </S.StoreTitle>
            <S.StarArea>
              <Star value={1} max={1} average={pointAvg} readOnly />
            </S.StarArea>
          </S.StoreNameArea>
          <S.BookmarkArea>
            <Bookmark
              size="2.6rem"
              marked={bookmarkStatus}
              storeIdProps={id}
              fetchCreateBookmarkStore={fetchCreateBookmarkStore}
            />
          </S.BookmarkArea>
        </S.CardContentAreaTop>
        {size === 'M' && ( // 카드 스타일 구분, m일땐 하단에 주소, 뱃지 노출됨
          <>
            <S.CardContentAddressArea>
              {address && (
                <S.CardContentAddress>
                  <Icon iconName="location_on" />
                  <Span isLoading={isLoading} fontSize="1.2rem" ellipsis={1} display="block">
                    {address}
                  </Span>
                </S.CardContentAddress>
              )}
              {phoneNumber && (
                <S.CardContentAddress>
                  <Icon iconName="call" />
                  <Span isLoading={isLoading} fontSize="1.2rem" ellipsis={1} display="block">
                    {phoneNumber}
                  </Span>
                </S.CardContentAddress>
              )}
              {isLoading && <SkeletonCard />}
            </S.CardContentAddressArea>
            <S.CardContentFacilityArea>
              <Badge isLoading={isLoading} name="approach" state={approach} />
              <Badge isLoading={isLoading} name="elevator" state={elevator} />
              <Badge isLoading={isLoading} name="toilet" state={toilet} />
              <Badge isLoading={isLoading} name="parking" state={parking} />
              <Badge isLoading={isLoading} name="height" state={heightDifferent} />
              {isLoading && <SkeletonCard />}
            </S.CardContentFacilityArea>
          </>
        )}
      </S.CardContentArea>
    </S.CardItem>
  );
}

export default StoreCard;
