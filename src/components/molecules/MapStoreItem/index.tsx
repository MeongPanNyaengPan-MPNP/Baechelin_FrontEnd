import * as S from '@molecules/MapStoreList/styles';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import Span from '@atoms/Span';
import Star from '@atoms/Star';
import StoreInfoContent from '@molecules/StoreInfoContent';
import Badge from '@atoms/Badge';
import Bookmark from '@molecules/Bookmark';
import React from 'react';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import { useLocation, useNavigate } from 'react-router-dom';

function MapStoreItem({ item }: { item: StoreMapResponseTypes }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.StoreItem key={item.storeId} className="store_item" id={`id_${item.storeId}`}>
      <S.InfoContainer onClick={() => navigate(`/store/${item.storeId}`)}>
        <StoreInfoPhotos location={location} storeDetailData={item} width="100" tile={false} />
        <div>
          <S.TitleArea>
            <h2>
              <Span fontWeight="normal" fontSize="1.2rem">
                {item?.category}
              </Span>
              <p>
                <Span fontWeight="bold" fontSize="1.6rem">
                  {item?.name}
                </Span>
              </p>
            </h2>
          </S.TitleArea>
          <S.RateArea>
            <Star sx={{ fontSize: '1.6rem' }} max={1} value={1} average={item.pointAvg} readOnly />
          </S.RateArea>
          <StoreInfoContent storeDetailData={item} showIcons={false} />
        </div>
      </S.InfoContainer>
      <S.BadgeList>
        <Badge name="approach" state={item.approach} />
        <Badge name="elevator" state={item.elevator} />
        <Badge name="toilet" state={item.toilet} />
        <Badge name="parking" state={item.parking} />
        <Badge name="height" state={item.heightDifferent} />
      </S.BadgeList>
      <S.BookmarkArea>
        <Bookmark size="2.5rem" storeIdProps={item.storeId} marked={item.bookmark} />
      </S.BookmarkArea>
    </S.StoreItem>
  );
}

export default MapStoreItem;
