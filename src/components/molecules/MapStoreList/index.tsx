import React from 'react';
import StoreInfoContent from '@molecules/StoreInfoContent';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import { useLocation, useNavigate } from 'react-router-dom';
import Badge from '@atoms/Badge';
import Span from '@atoms/Span';
import Star from '@atoms/Star';
import Bookmark from '@molecules/Bookmark';
import { StoreMapResponseTypes } from '@interfaces/StoreResponseTypes';
import Icon from '@atoms/Icon';
import * as S from './styles';

type MapStoreListProps = {
  storeItems: StoreMapResponseTypes[][] | undefined;
  leftElement: number | undefined;
};

function MapStoreList(props: MapStoreListProps) {
  const { leftElement, storeItems } = props;
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Inner id="storeScrollList">
        {storeItems?.map((stores) => (
          <div key={`wrap_${stores[0].storeId}`}>
            {stores.map((item) => (
              <S.StoreItem
                key={item.storeId}
                className="store_item"
                id={`id_${item.storeId}`}
                onClick={() => navigate(`/store/${item.storeId}`)}
              >
                <S.InfoContainer>
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
                      <S.BookmarkArea>
                        <Bookmark size="2.5rem" marked={item.bookmark} />
                      </S.BookmarkArea>
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
              </S.StoreItem>
            ))}
          </div>
        ))}
        {Number(leftElement) > 3 && (
          <S.totalCount>
            <p>
              <Icon iconName="add_icon" color="#fff" />
              {leftElement}개의 가게
            </p>
          </S.totalCount>
        )}
      </S.Inner>
    </S.Container>
  );
}

export default MapStoreList;
