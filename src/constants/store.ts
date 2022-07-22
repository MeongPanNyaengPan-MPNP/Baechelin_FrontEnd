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
};
export const STORE_REVIEW_TAG = {
  bKiosk: '배리어프리 키오스크',
  bTable: '입식 테이블',
  bMenu: '점자 메뉴판',
  bWheelchair: '휠체어가 들어갈 수 있는',
  bHelp: '직원에 도움 요청',
  bAutoDoor: '자동문',
  fDelicious: '음식이 맛있는',
  fClean: '매장이 깔끔한',
  fVibe: '분위기 좋은',
  fQuantity: '양이 많은',
  fGoodToEat: '먹기 편한',
  fPrice: '가격이 착한',
};
export const STORE_DEFAULT_VALUES = {
  CATEGORY: 'ALL',
  FACILITY: [''],
};
export const STORE_TOPIC = {
  ARROUND: 'near',
  POINT: 'point',
  BOOKMARK: 'bookmark',
  RECENT_REVIEW: 'recent-review',
};
export const STORE_LIST_TITLE = {
  ARROUND: '님 주변 밥집',
  POINT: '별점이 높은 가게',
  BOOKMARK: '저장 많이한 가게',
  RECENT_REVIEW: '실시간 맛집 후기',
};
