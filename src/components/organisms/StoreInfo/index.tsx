import StoreInfoContent from '@molecules/StoreInfoContent';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import StoreInfoTitle from '@molecules/StoreInfoTitle';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getStoreDetail } from '@service/storeDetailApi';

import Badge from '@atoms/Badge';

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
          <S.Inner>
            <S.IconsWrapper className="icons_area">
              {/* {icons.map((v) => (
          <Icon iconName={v} size="3.6rem" margin="0 1.4rem 0 0" key={v} />
        ))} */}
              <S.BadgeArea>
                <Badge
                  name="elevator"
                  state={storeDetailData?.elevator}
                  type="sq"
                  style={{
                    width: '14.8rem',
                    height: '3.6rem',
                  }}
                />
                <Badge
                  name="height"
                  state={storeDetailData?.heightDifferent}
                  type="sq"
                  style={{
                    width: '14.8rem',
                    height: '3.6rem',
                  }}
                />
              </S.BadgeArea>
              <S.BadgeArea>
                <Badge
                  name="approach"
                  state={storeDetailData?.approach}
                  type="sq"
                  style={{
                    width: '14.8rem',
                    height: '3.6rem',
                  }}
                />
                <Badge
                  name="parking"
                  state={storeDetailData?.parking}
                  type="sq"
                  style={{
                    width: '14.8rem',
                    height: '3.6rem',
                  }}
                />
                <Badge
                  name="toilet"
                  state={storeDetailData?.toilet}
                  type="sq"
                  style={{
                    width: '14.8rem',
                    height: '3.6rem',
                  }}
                />
              </S.BadgeArea>
            </S.IconsWrapper>
          </S.Inner>
          <StoreInfoPhotos location={location} storeDetailData={storeDetailData} />
        </S.FigureArea>
      </>
    </S.Container>
  );
}

export default StoreInfo;
