import React from 'react';
import MainTemplates from '@templates/MainTemplates';
import { useRecoilValue } from 'recoil';
import { SnbQueryString } from '@recoil/mainSnbAtom';
import { STORE_FILTERS, STORELIST } from '@constants/index';
import { StoreResponseTypes } from '@interfaces/StoreResponseTypes';
import { useQueryAtLocation } from '@hooks/UseQueryAtLocation';
import { UserLoctaionType } from '@interfaces/LocationTypes';
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
  const [userLocation, setUserLocation] = React.useState<UserLoctaionType | undefined>();
  const reviewDummyData = [
    {
      name: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 2092390,
      userId: 291391,
      address: '주소',
    },
    {
      name: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 2092390,
      userId: 291391,
      address: '주소',
    },
    {
      name: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 2092390,
      userId: 291391,
      address: '주소',
    },
    {
      name: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 2092390,
      userId: 291391,
      address: '주소',
    },
    {
      name: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 2092390,
      userId: 291391,
      address: '주소',
    },
    {
      name: '가게이름',
      point: 4.5,
      userName: '유저이름',
      content: '리뷰내용',
      reviewImageUrlList: ['/'],
      // tagList: ['bKiosk', 'bWheelchair', 'bHelp', 'fDelicious', 'fClean'],
      reviewId: 30,
      storeId: 2092390,
      userId: 291391,
      address: '주소',
    },
  ];

  const { currentLocation } = UseGeolocation();

  const { useArroundStoreList } = useQueryAtLocation<ArroundQueryTypes>(currentLocation);
  const {
    data: arroundStoreData,
    isSuccess: arroundStoreSuccess,
    refetch: ArroundRefetch,
  } = useArroundStoreList(STORELIST.ARROUNDSTORE, SnbRecoilQuery);
  // 위치 useState
  React.useEffect(() => {
    (async function() {
      await currentLocation;
      setUserLocation(currentLocation);
      console.log('currentLocation', currentLocation);
    })();
  }, [currentLocation]);
  return (
    <MainTemplates
      facilityItems={STORE_FILTERS.FACILITY}
      cateItems={STORE_FILTERS.CATEGORY}
      arroundStoreItems={arroundStoreData?.cards}
      arroundStoreItemState={arroundStoreSuccess}
      reviewList={reviewDummyData}
      slideItems={mainVisualSlideItems}
      arroundRefetch={ArroundRefetch}
      userLocationState={userLocation}
    />
  );
}

export default Main;
