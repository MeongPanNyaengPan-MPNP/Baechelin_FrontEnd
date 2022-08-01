/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MainTemplates from '@templates/MainTemplate';
import { STORE_FILTERS } from '@constants/store';
import UseGeolocation from '@hooks/UseGeolocation';
import { useRecoilState, useRecoilValue } from 'recoil';
import locationAtom from '@recoil/locationAtom';
import { userInfo } from '@recoil/userAtom';
// TODO : 초기화, 전체 카테고리 넣기

const mainVisualSlideItems = [
  {
    name: '배슐랭배너_1',
    alt: '배슐랭, barrier-free + 미슐랭. 사회적 교통 약자도 편하게 식사하세요',
    src: '/img/banner/img_banner01_bg.png',
    txt: '/img/banner/img_banner01_text.png',
  },
  {
    name: '배슐랭배너_2',
    alt: '배리어프리 성수동 맛집',
    src: '/img/banner/img_banner02_bg.png',
    txt: '/img/banner/img_banner02_text.png',
  },
  {
    name: '배슐랭배너_3',
    alt: '배리어프리 바베큐 하우스',
    src: '/img/banner/img_banner03_bg.png',
    txt: '/img/banner/img_banner03_text.png',
  },
];

function Main() {
  const { currentLocation } = UseGeolocation();
  const [location, setLocation] = useRecoilState(locationAtom);
  const userInfoValue = useRecoilValue(userInfo);

  React.useEffect(() => {
    if (currentLocation !== null && location === null) {
      // localstorage 초기 셋팅
      setLocation(currentLocation);
    }
  }, [currentLocation]);
  return <MainTemplates userInfo={userInfoValue} filters={STORE_FILTERS} slideItems={mainVisualSlideItems} />;
}

export default Main;
