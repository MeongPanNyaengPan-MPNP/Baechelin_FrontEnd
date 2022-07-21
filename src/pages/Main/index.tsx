import React from 'react';
import MainTemplates from '@templates/MainTemplate';
import { STORE_FILTERS } from '@constants/index';
// TODO : 초기화, 전체 카테고리 넣기

const mainVisualSlideItems = [
  {
    name: 'ss',
    alt: '배슐랭1, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
    src: '/img/banner/img_banner01.png',
  },
];

function Main() {
  return (
    <MainTemplates
      facilityItems={STORE_FILTERS.FACILITY}
      cateItems={STORE_FILTERS.CATEGORY}
      slideItems={mainVisualSlideItems}
    />
  );
}

export default Main;
