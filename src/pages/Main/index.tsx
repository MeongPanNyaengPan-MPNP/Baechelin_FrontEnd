import React, { useEffect } from 'react';
import MainTemplates from '@templates/MainTemplates';
import { getPosition, parseUserLocation } from '@utils/Location/getLocation';
import locationAtom from '@recoil/locationAtom';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { getNearStore } from '@service/storeListApi';

import { cateItems, facilityItems } from '@utils/DefaultData/defaultCategory';

function Main() {
  const mainVisualSlideItems = [
    {
      name: 'ss',
      alt: '배슐랭1, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
  ];

  const [userLocationState, setUserLocationState] = useRecoilState(locationAtom);

  const { data } = useQuery('nearStore', () => getNearStore(0, 12, userLocationState), {
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: () => {
      console.log('query success');
    },
    onError: (e) => {
      console.log(e);
    },
  });

  // 사용자 위치정보 얻기, 얻은 후 nearStore refetching
  useEffect(() => {
    getPosition();
    const userLocation = parseUserLocation();
    setUserLocationState(userLocation);
  }, [setUserLocationState]);

  return (
    <MainTemplates
      facilityItems={facilityItems}
      arroundStoreItems={data?.data.cards}
      slideItems={mainVisualSlideItems}
      cateItems={cateItems}
      userLocationState={userLocationState}
    />
  );
}

export default Main;
