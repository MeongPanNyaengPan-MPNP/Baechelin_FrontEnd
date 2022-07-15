import React from 'react';
import ThumbNail from '@atoms/Thumbnail';
import Span from '@atoms/Span';
import * as S from './styles';

type StoreCardProps = {
  storeId?: 0;
  category?: string[];
  name?: string;
  address?: string;
  storeImageUrl?: string;
  storeModifiedAt?: string;
  pointAvg?: number;
  bookmark?: string;
  elevator?: string;
  toilet?: string;
  parking?: string;
  heightDifferent?: string;
  approach?: string;
};

function StoreCard<T extends StoreCardProps>({ cardItem }: { cardItem: T }) {
  return (
    <S.CardItem size="m">
      <S.CardFigureArea size="m">
        <ThumbNail alt={cardItem.name} src="." />
      </S.CardFigureArea>
      <S.CartTextArea>
        <Span>{cardItem.address}</Span>
        <Span>{cardItem.name}</Span>
        <Span>{cardItem.elevator}</Span>
      </S.CartTextArea>
    </S.CardItem>
  );
}

export default StoreCard;
