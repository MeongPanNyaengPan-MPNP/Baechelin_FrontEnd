import { atom } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const LatingQueryString = atom<string>({
  key: 'LatingQueryString',
  default: '',
});
