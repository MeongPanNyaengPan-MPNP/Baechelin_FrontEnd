/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MainTemplates from '@templates/MainTemplate';
import { STORE_FILTERS } from '@constants/store';
import UseGeolocation from '@hooks/UseGeolocation';
import { useRecoilState } from 'recoil';
import locationAtom from '@recoil/locationAtom';
// TODO : 초기화, 전체 카테고리 넣기

const mainVisualSlideItems = [
  {
    name: 'ss',
    alt: '배슐랭1, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
    src: '/img/banner/img_banner01_bg.png',
    txt: '/img/banner/img_banner01_text.png',
  },
];

function Main() {
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);
  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      // localstorage 초기 셋팅
      setLocation(currentLocation);
    }
  }, [currentLocation]);
  return <MainTemplates filters={STORE_FILTERS} slideItems={mainVisualSlideItems} />;
}

export default Main;
