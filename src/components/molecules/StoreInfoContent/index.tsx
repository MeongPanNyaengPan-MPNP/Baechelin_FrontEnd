import Badge from '@atoms/Badge';
import Icon from '@atoms/Icon';
import Span from '@atoms/Span';
import { getStoreDetail } from '@service/storeDetailApi';
import React from 'react';
import { useQuery } from 'react-query';
import * as S from './styles';

interface StoreInfoContentProps {
  storeName: string | undefined;
  showIcons?: boolean;
}

function StoreInfoContent({ storeName, showIcons = true }: StoreInfoContentProps) {
  const { data: storeDetailData }: any = useQuery(
    ['getShopDetail', storeName],
    () => getStoreDetail(Number(storeName)),
    {
      // eslint-disable-next-line object-curly-newline
      staleTime: 5000,
      cacheTime: Infinity,
      enabled: !!storeName,
    },
  );

  // const icons = ['local_parking', 'wheelchair_pickup', 'accessible_forward'];

  return (
    <S.Container>
      <S.Wrapper>
        <Icon iconName="location_on" size="2.4rem" margin="0 1.2rem 0 0" />
        <Span fontSize="2rem">{storeDetailData?.address}</Span>
      </S.Wrapper>
      <S.Wrapper>
        <Icon iconName="local_phone" size="2.4rem" margin="0 1.2rem 0 0" />
        <Span fontSize="2rem">{storeDetailData?.phoneNumber}</Span>
      </S.Wrapper>
      {showIcons && (
        <S.IconsWrapper>
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
      )}
    </S.Container>
  );
}

export default StoreInfoContent;
