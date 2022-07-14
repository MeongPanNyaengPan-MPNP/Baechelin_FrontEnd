import React from 'react';
import MainTemplates from '@templates/MainTemplates';

function Main() {
  const mainVisualSlideItems = [
    {
      alt: '배슐랭1, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
    {
      alt: '배슐랭2, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
      src: '/img/banner/img_banner01.png',
    },
    {
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
  return <MainTemplates facilityItems={facilityItems} slideItems={mainVisualSlideItems} cateItems={cateItems} />;
}

export default Main;
