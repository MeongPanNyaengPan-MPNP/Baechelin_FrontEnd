// eslint-disable-next-line import/prefer-default-export
export const STORE_FILTERS = {
  CATEGORY: [
    {
      LABEL: '전체',
      KEY: 'ALL',
      CHECKED: false,
    },
    {
      LABEL: '한식',
      KEY: 'KOREAN',
      CHECKED: true,
    },
    {
      LABEL: '중식',
      KEY: 'CHINESE',
      CHECKED: false,
    },
    {
      LABEL: '양식',
      KEY: 'WESTERN',
      CHECKED: false,
    },
    {
      LABEL: '일식',
      KEY: 'JAPANESE',
      CHECKED: false,
    },
    {
      LABEL: '아시안음식',
      KEY: 'ASIAN',
      CHECKED: false,
    },
    {
      LABEL: '패밀리레스토랑',
      KEY: 'FAMILY',
      CHECKED: false,
    },
    {
      LABEL: '간식',
      KEY: 'SNACK',
      CHECKED: false,
    },
    {
      LABEL: '카페',
      KEY: 'CAFE',
      CHECKED: false,
    },
    {
      LABEL: '술집',
      KEY: 'HOFF',
      CHECKED: false,
    },
    {
      LABEL: '기타',
      KEY: 'ETC',
      CHECKED: false,
    },
  ],
  FACILITY: [
    {
      LABEL: '휠체어 경사로',
      KEY: 'approach',
      CHECKED: false,
    },
    {
      LABEL: '엘레베이터',
      KEY: 'elevator',
      CHECKED: false,
    },
    {
      LABEL: '장애인 전용 화장실',
      KEY: 'toilet',
      CHECKED: false,
    },
    {
      LABEL: '장애인 전용 주차장',
      KEY: 'parking',
      CHECKED: false,
    },
    {
      LABEL: '주출입구 단차 없음',
      KEY: 'heightDifferent',
      CHECKED: false,
    },
  ],
  LOCATION_1: [
    {
      LABEL: '지역 전체',
      KEY: '전체',
    },
    {
      LABEL: '서울특별시',
      KEY: '서울',
    },
    {
      LABEL: '부산광역시',
      KEY: '부산',
    },
    {
      LABEL: '대구광역시',
      KEY: '대구',
    },
    {
      LABEL: '인천광역시',
      KEY: '인천',
    },
    {
      LABEL: '광주광역시',
      KEY: '광주',
    },
    {
      LABEL: '대전광역시',
      KEY: '대전',
    },
    {
      LABEL: '울산광역시',
      KEY: '울산',
    },
    {
      LABEL: '경기도',
      KEY: '경기',
    },
    {
      LABEL: '충청북도',
      KEY: '충청북도',
    },
    {
      LABEL: '충청남도',
      KEY: '충청남도',
    },
    {
      LABEL: '전라북도',
      KEY: '전라북도',
    },
    {
      LABEL: '전라남도',
      KEY: '전라남도',
    },
    {
      LABEL: '경상북도',
      KEY: '경상북도',
    },
    {
      LABEL: '경상남도',
      KEY: '경상남도',
    },
  ],
};
export const STORE_REVIEW_TAG: { [index: string]: string } = {
  bKiosk: '배리어프리 키오스크',
  bBasicKiosk: '일반 키오스크',
  bTable: '입식 테이블',
  bMenu: '점자 메뉴판',
  bHelp: '직원에 도움 요청',
  bAutoDoor: '자동문',
  bWideDoor: '넓은 출입구',
  bParking: '무료주차',
  bNoParking: '주차불가',
  bWithPet: '반려동물 동반',
  fDelicious: '맛있는',
  fClean: '깔끔한',
  fVibe: '분위기 좋은',
  fQuantity: '양이 많은',
  fGoodToEat: '먹기 편한',
  fPrice: '가격이 착한',
  fQuiet: '조용한',
  fLoud: '시끌벅적한',
  fWide: '공간이 넓은',
  fSmall: '공간이 좁은',
};
export const STORE_DEFAULT_VALUES = {
  CATEGORY: 'ALL',
  FACILITY: [''],
};
export const STORE_LOCATION_VALUES = {
  LOCATION_1: '전체',
  LOCATION_2: '',
};
export const STORE_TOPIC = {
  ARROUND: 'near',
  POINT: 'point',
  BOOKMARK: 'bookmark',
  RECENT_REVIEW: 'recent-review',
};
export const STORE_LIST_TITLE = {
  ARROUND: '주변 가게',
  POINT: '별점이 높은 가게',
  BOOKMARK: '저장 많이한 가게',
  RECENT_REVIEW: '실시간 맛집 후기',
};

export const REVIEW_FILTERS = {
  FACILITY: [
    {
      KEY: 'bKiosk',
      LABEL: '배리어프리 키오스크',
      CHECKED: false,
    },

    {
      KEY: 'bBasicKiosk',
      LABEL: '일반 키오스크',
      CHECKED: false,
    },
    {
      KEY: 'bTable',
      LABEL: '입식 테이블',
      CHECKED: false,
    },
    {
      KEY: 'bMenu',
      LABEL: '점자 메뉴판',
      CHECKED: false,
    },
    {
      KEY: 'bHelp',
      LABEL: '직원에 도움 요청',
      CHECKED: false,
    },
    {
      KEY: 'bAutoDoor',
      LABEL: '자동문',
      CHECKED: false,
    },
    {
      KEY: 'bWideDoor',
      LABEL: '넓은 출입구',
      CHECKED: false,
    },
    {
      KEY: 'bParking',
      LABEL: '무료주차',
      CHECKED: false,
    },
    {
      KEY: 'bNoParking',
      LABEL: '주차불가',
      CHECKED: false,
    },
    {
      KEY: 'bWithPet',
      LABEL: '반려동물 동반',
      CHECKED: false,
    },
  ],
  QUALITY: [
    {
      KEY: 'fDelicious',
      LABEL: '맛있는',
      CHECKED: false,
    },
    {
      KEY: 'fClean',
      LABEL: '깔끔한',
      CHECKED: false,
    },
    {
      KEY: 'fVibe',
      LABEL: '분위기 좋은',
      CHECKED: false,
    },
    {
      KEY: 'fQuantity',
      LABEL: '양이 많은',
      CHECKED: false,
    },
    {
      KEY: 'fGoodToEat',
      LABEL: '먹기 편한',
      CHECKED: false,
    },
    {
      KEY: 'fPrice',
      LABEL: '가격이 착한',
      CHECKED: false,
    },
    {
      KEY: 'fQuiet',
      LABEL: '조용한',
      CHECKED: false,
    },
    {
      KEY: 'fLoud',
      LABEL: '시끌벅적한',
      CHECKED: false,
    },
    {
      KEY: 'fWide',
      LABEL: '공간이 넓은',
      CHECKED: false,
    },

    {
      KEY: 'fSmall',
      LABEL: '공간이 좁은',
      CHECKED: false,
    },
  ],
};
