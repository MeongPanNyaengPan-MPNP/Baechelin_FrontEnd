import React, { ReactNode } from 'react';
import NoDataMessage from '@molecules/NodataMessage';

import * as S from './styles';

type MapStoreListProps = {
  totalCount: number | undefined;
  isFetched: boolean;
  children: ReactNode;
  isLoading?: boolean;
  bool?: boolean;
};

function MapStoreList(props: MapStoreListProps) {
  const { children, isFetched, totalCount, bool, isLoading } = props;
  console.log(bool, isLoading);
  return (
    <S.Container>
      <S.Inner>
        <S.MessageArea>
          <NoDataMessage message={['주변에 배리어프리 가게를 찾는 중..']} />
        </S.MessageArea>
        {totalCount === 0 && isFetched && (
          <S.MessageArea>
            <NoDataMessage message={['주변에 배리어프리 가게가 없습니다']} />
          </S.MessageArea>
        )}
        <S.ListSection id="storeScrollList">{children}</S.ListSection>
      </S.Inner>
    </S.Container>
  );
}

export default MapStoreList;
