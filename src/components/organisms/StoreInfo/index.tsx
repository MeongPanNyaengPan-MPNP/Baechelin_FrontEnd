import StoreInfoContent from '@molecules/StoreInfoContent';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import StoreInfoTitle from '@molecules/StoreInfoTitle';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getStoreDetail } from '@service/storeDetailApi';

import Badge from '@atoms/Badge';
import Span from '@atoms/Span';
import * as S from './styles';

interface StoreInfoProps {
  storeName?: string | undefined;
  size?: 'big' | 'regular' | 'small' | 'xsmall';
  align?: string;
}

function StoreInfo({ storeName, align, size = 'big' }: StoreInfoProps) {
  const location = useLocation();

  const { data: storeDetailData }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
    },
  );

  return (
    /* 가게 상세페이지 형태 */
    <S.Container size={size} align={align}>
      <>
        <S.TextArea>
          <StoreInfoTitle storeDetailData={storeDetailData} />
          <StoreInfoContent showIcons={false} storeDetailData={storeDetailData} />
        </S.TextArea>
        <S.FigureArea>
          <div>
            <Span fontSize="1.6rem">편의 시설</Span>
            <S.IconsWrapper className="icons_area">
              {/* {icons.map((v) => (
          <Icon iconName={v} size="3.6rem" margin="0 1.4rem 0 0" key={v} />
        ))} */}
              <Badge
                name="elevator"
                state={storeDetailData?.elevator}
                style={{
                  height: '4.4rem',
                  width: '4.4rem',
                }}
              />

              <Badge
                name="height"
                state={storeDetailData?.heightDifferent}
                style={{
                  height: '4.4rem',
                  width: '4.4rem',
                }}
              />
              <Badge
                name="approach"
                state={storeDetailData?.approach}
                style={{
                  height: '4.4rem',
                  width: '4.4rem',
                }}
              />
              <Badge
                name="parking"
                state={storeDetailData?.parking}
                style={{
                  height: '4.4rem',
                  width: '4.4rem',
                }}
              />
              <Badge
                name="toilet"
                state={storeDetailData?.toilet}
                style={{
                  height: '4.4rem',
                  width: '4.4rem',
                }}
              />
            </S.IconsWrapper>
          </div>
          <StoreInfoPhotos location={location} storeDetailData={storeDetailData} />
        </S.FigureArea>
      </>
    </S.Container>
  );
}

export default StoreInfo;
