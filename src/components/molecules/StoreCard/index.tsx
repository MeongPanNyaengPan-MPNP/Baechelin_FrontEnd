import React from 'react';
import ThumbNail from '@atoms/Thumbnail';
import Span from '@atoms/Span';
import Star from '@atoms/Star';
import Icon from '@atoms/Icon';
import Badge from '@atoms/Badge';
import { FacilityTypes, StoreBasicInfoTypes } from '@interfaces/StoreTypes';
import * as S from './styles';

export type CardStylesProps = {
  size?: 'M' | 'L';
};

function StoreCard<T extends Partial<StoreBasicInfoTypes> & Partial<FacilityTypes>>(props: T & CardStylesProps) {
  const {
    size,
    name,
    address,
    category,
    storeImageUrl,
    pointAvg,
    elevator,
    toilet,
    parking,
    approach,
    heightDifferent,
  } = props;
  return (
    <S.CardItem size={size}>
      <S.CardFigureArea>
        <ThumbNail alt={name} src={storeImageUrl} height="100%" />
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
            <S.CardContentAddress>
              <Icon iconName="location_on" />
              <Span fontSize="1.2rem" display="block">
                {address}
              </Span>
            </S.CardContentAddress>
            <S.CardContentFacilityArea>
              <Badge name="elevator" state={elevator} />
              <Badge name="height" state={heightDifferent} />
              <Badge name="approach" state={approach} />
              <Badge name="parking" state={parking} />
              <Badge name="toilet" state={toilet} />
            </S.CardContentFacilityArea>
          </>
        )}
      </S.CardContentArea>
    </S.CardItem>
  );
}

export default StoreCard;
