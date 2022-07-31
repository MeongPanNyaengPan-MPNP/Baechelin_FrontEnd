import React from 'react';
import Span from '@atoms/Span';
import StoreInfoTitle from '@molecules/StoreInfoTitle';
import StoreInfoContent from '@molecules/StoreInfoContent';
import { useQuery } from 'react-query';
import { getStoreDetail } from '@service/storeDetailApi';
import StoreInfoPhotos from '@molecules/StoreInfoPhotos';
import * as S from './styles';

function ReviewFormTitle({ storeId }: { storeId: string }) {
  const { data: storeDetailData }: any = useQuery(['getShopDetail', storeId], () => getStoreDetail(Number(storeId)), {
    // eslint-disable-next-line object-curly-newline
    staleTime: 5000,
    cacheTime: Infinity,
  });

  return (
    <>
      <h3>
        <Span fontSize="2.4rem" fontWeight="bold">
          후기 남기기
        </Span>
      </h3>
      <S.TttleBox>
        <StoreInfoPhotos tile={false} storeDetailData={storeDetailData} />
        <S.TextArea>
          <StoreInfoTitle storeDetailData={storeDetailData} bookmarkShow={false} />
          <StoreInfoContent showIcons={false} storeDetailData={storeDetailData} />
        </S.TextArea>
      </S.TttleBox>
    </>
  );
}

export default ReviewFormTitle;
