import React, { useEffect } from 'react';
import MainTemplates from '@templates/MainTemplates';
import { FacilityTypes, StoreBasicInfoTypes } from '@interfaces/StoreTypes';
import { getPosition } from '@utils/Location/getLocation';
import locationAtom from '@recoil/locationAtom';
import { useRecoilState } from 'recoil';

export type NearStoreItemsType = StoreBasicInfoTypes & FacilityTypes;

function Main() {
  const mainVisualSlideItems = [
    {
      name: 'ss',
      alt: '배슐랭1, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
  ];
  const cateItems = [
    {
      label: '밥집',
      checked: false,
    },
    {
      label: '중식',
      checked: false,
    },
    {
      label: '양식',
      checked: false,
    },
    {
      label: '일식',
      checked: false,
    },
    {
      label: '아시안음식',
      checked: false,
    },
    {
      label: '패밀리레스토랑',
      checked: false,
    },
    {
      label: '간식',
      checked: false,
    },
    {
      label: '카페',
      checked: false,
    },
    {
      label: '술집',
      checked: false,
    },
    {
      label: '기타',
      checked: false,
    },
  ];
  const facilityItems = [
    {
      label: '휠체어 경사로',
      checked: false,
    },
    {
      label: '엘레베이터',
      checked: false,
    },
    {
      label: '장애인 전용 화장실',
      checked: false,
    },
    {
      label: '장애인 전용 주차장',
      checked: false,
    },
    {
      label: '주출입구 단차 없음',
      checked: false,
    },
  ];
  const cardItems: NearStoreItemsType[] = [
    {
      storeId: 0,
      category: '중식',
      name: '이름',
      address: '주소',
      storeImageUrl:
        'https://media.self.com/photos/622912847b959736301bfb91/4:3/w_2560%2Cc_limit/GettyImages-1301412050.jpg',
      storeModifiedAt: ' 0000-00-00',
      pointAvg: 4.5,
      bookmark: 'Y',
      elevator: 'N',
      toilet: 'N',
      parking: 'Y',
      heightDifferent: 'Y',
      approach: 'Y',
    },
    {
      storeId: 0,
      category: '중식',
      name: '이름',
      address: '주소',
      storeImageUrl:
        'https://media.self.com/photos/622912847b959736301bfb91/4:3/w_2560%2Cc_limit/GettyImages-1301412050.jpg',
      storeModifiedAt: ' 0000-00-00',
      pointAvg: 4.5,
      bookmark: 'N',
      elevator: 'Y',
      toilet: 'N',
      parking: 'Y',
      heightDifferent: 'Y',
      approach: 'Y',
    },
    {
      storeId: 0,
      category: '중식',
      name: '이름',
      address: '주소',
      storeImageUrl:
        'https://media.self.com/photos/622912847b959736301bfb91/4:3/w_2560%2Cc_limit/GettyImages-1301412050.jpg',
      storeModifiedAt: ' 0000-00-00',
      pointAvg: 4.5,
      bookmark: 'N',
      elevator: 'Y',
      toilet: 'N',
      parking: 'Y',
      heightDifferent: 'Y',
      approach: 'N',
    },
    {
      storeId: 0,
      category: '중식',
      name: '이름',
      address: '주소',
      storeImageUrl:
        'https://media.self.com/photos/622912847b959736301bfb91/4:3/w_2560%2Cc_limit/GettyImages-1301412050.jpg',
      storeModifiedAt: ' 0000-00-00',
      pointAvg: 4.5,
      bookmark: 'Y',
      elevator: 'Y',
      toilet: 'N',
      parking: 'N',
      heightDifferent: 'Y',
      approach: 'N',
    },
  ];
  const [userLocation, setUserLocation] = useRecoilState(locationAtom);

  useEffect(() => {
    getPosition()
      .then((res) => {
        setUserLocation(res);
      })
      .catch((error) => {
        alert('위치 정보를 알 수 없습니다');
        console.log(error);
      });
  }, [setUserLocation]);
  return (
    <MainTemplates
      facilityItems={facilityItems}
      arroundStoreItems={cardItems}
      slideItems={mainVisualSlideItems}
      cateItems={cateItems}
      userLocation={userLocation}
    />
  );
}

export default Main;
