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
  return <MainTemplates slideItems={mainVisualSlideItems} />;
}

export default Main;
