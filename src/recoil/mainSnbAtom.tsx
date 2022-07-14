import { atom } from 'recoil';

export const SnbGetValues = atom<any>({
  key: 'SnbGetValues',
  default: {
    CategorySnb: '',
    FacilitySnb: [],
  },
});
export const SnbQueryString = atom<string>({
  key: 'SnbQueryString',
  default: '',
});
