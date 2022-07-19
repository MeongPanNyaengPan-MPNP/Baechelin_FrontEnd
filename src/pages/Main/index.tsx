import React from 'react';
import MainTemplates from '@templates/MainTemplates';

import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';
import { getNearStore } from '@service/storeListApi';
import { SnbQueryString } from '@recoil/mainSnbAtom';
import { STORE_FILTERS, STORELIST } from '@constants/index';
import { StoreResponseTypes } from '@interfaces/StoreResponseTypes';
import UseGeolocation from '@hooks/UseGeolocation';

type ArroundQueryTypes = {
  cards?: StoreResponseTypes[];
};

function Main() {
  const mainVisualSlideItems = [
    {
      name: 'ss',
      alt: '배슐랭1, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
  ];
  const SnbRecoilQuery = useRecoilValue(SnbQueryString);
  const { currentLocation } = UseGeolocation();

  const {
    data: arroundStoreData,
    refetch,
    isSuccess,
  } = useQuery<ArroundQueryTypes>(
    [STORELIST.NEARSTORE, SnbRecoilQuery],
    () => getNearStore(currentLocation, SnbRecoilQuery),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: () => {
        console.log('cards', arroundStoreData);
      },
      onError: (e) => {
        console.log(e);
      },
    },
  );
  return (
    <MainTemplates
      facilityItems={STORE_FILTERS.FACILITY}
      arroundStoreItems={arroundStoreData?.cards}
      arroundStoreItemState={isSuccess}
      reviewList={arroundStoreData?.cards}
      slideItems={mainVisualSlideItems}
      cateItems={STORE_FILTERS.CATEGORY}
      refetch={refetch}
      userLocationState={currentLocation}
    />
  );
}

export default Main;
