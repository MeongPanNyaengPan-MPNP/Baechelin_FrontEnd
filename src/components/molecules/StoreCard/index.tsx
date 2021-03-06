import React from 'react';
import ThumbNail from '@atoms/Thumbnail';
import Span from '@atoms/Span';
import Star from '@atoms/Star';
import Icon from '@atoms/Icon';
import Badge from '@atoms/Badge';
import { useNavigate } from 'react-router-dom';
import { StoreResponseTypes } from '@interfaces/StoreResponseTypes';
import * as S from './styles';

export type CardStylesProps = {
  size?: 'M' | 'L';
};

function StoreCard<T extends Partial<StoreResponseTypes>>(props: T & CardStylesProps) {
  const noImage = '/img/ui/no_picture.svg';
  const navigate = useNavigate();
  const {
    storeId,
    size = 'M',
    name,
    address,
    category,
    phoneNumber,
    storeImgList = noImage,
    pointAvg,
    elevator,
    toilet,
    parking,
    approach,
    heightDifferent,
  } = props;
  return (
    <S.CardItem size={size} onClick={() => navigate(`/store/${storeId}`)}>
      <S.CardFigureArea>
        {storeImgList.length < 1 ? (
          <ThumbNail alt={name} src={noImage} height="100%" />
        ) : (
          <ThumbNail alt={name} src={storeImgList[0]} height="100%" />
        )}
      </S.CardFigureArea>
      <S.CardContentArea>
        <S.CardContentAreaTop>
          <Span fontSize="1.2rem">
            <>
              {size === 'L' && <>{address} - </>}
              {category}
            </>
          </Span>
          <S.StoreNameArea>
            <Span fontSize="16px" fontWeight="bold">
              {name}
            </Span>
            <S.StarArea>
              <Star max={1} value={pointAvg} readOnly />
            </S.StarArea>
          </S.StoreNameArea>
        </S.CardContentAreaTop>
        {size === 'M' && ( // 카드 스타일 구분, m일땐 하단에 주소, 뱃지 노출됨
          <>
            <S.CardContentAddressArea>
              <S.CardContentAddress>
                <Icon iconName="location_on" />
                <Span fontSize="1.2rem" display="block">
                  {address}
                </Span>
              </S.CardContentAddress>
              <S.CardContentAddress>
                <Icon iconName="call" />
                <Span fontSize="1.2rem" display="block">
                  {phoneNumber}
                </Span>
              </S.CardContentAddress>
            </S.CardContentAddressArea>
            <S.CardContentFacilityArea>
              <Badge name="approach" state={approach} />
              <Badge name="elevator" state={elevator} />
              <Badge name="toilet" state={toilet} />
              <Badge name="parking" state={parking} />
              <Badge name="height" state={heightDifferent} />
            </S.CardContentFacilityArea>
          </>
        )}
      </S.CardContentArea>
    </S.CardItem>
  );
}

export default StoreCard;
