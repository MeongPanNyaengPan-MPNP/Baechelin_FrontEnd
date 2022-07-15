import React from 'react';
import MainTemplates from '@templates/MainTemplates';
import { FacilityTypes, StoreBasicInfoTypes } from '@interfaces/StoreTypes';

export type NearStoreItemsType = StoreBasicInfoTypes & FacilityTypes;

function Main() {
  const mainVisualSlideItems = [
    {
      name: 'ss',
      alt: '배슐랭1, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
    {
      name: 'ss2',
      alt: '배슐랭2, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
    {
      name: 'ss3',
      alt: '배슐랭3, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
  ];
  const cateItems = [
    {
      label: 'cate1',
      checked: false,
    },
    {
      label: 'cate2',
      checked: false,
    },
    {
      label: 'cate3',
      checked: false,
    },
  ];
  const facilityItems = [
    {
      label: 'facility1',
      checked: false,
    },
    {
      label: 'facility2',
      checked: false,
    },
    {
      label: 'facility3',
      checked: false,
    },
    {
      label: 'facility4',
      checked: false,
    },
    {
      label: 'facility5',
      checked: false,
    },
  ];
  const cardItems: NearStoreItemsType[] = [
    {
      storeId: 0,
      category: ['0', '1'],
      name: '이름',
      address: '주소',
      storeImageUrl: './',
      storeModifiedAt: ' 0000-00-00',
      pointAvg: 4.5,
      bookmark: 'Y',
      elevator: 'Y',
      toilet: 'N',
      parking: 'Y',
      heightDifferent: 'Y',
      approach: 'Y',
    },
  ];
  return (
    <MainTemplates
      facilityItems={facilityItems}
      NearStoreItems={cardItems}
      slideItems={mainVisualSlideItems}
      cateItems={cateItems}
    />
  );
}

export default Main;
