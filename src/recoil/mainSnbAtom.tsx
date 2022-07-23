import { atom } from 'recoil';
import { STORE_DEFAULT_VALUES } from '@constants/store';

export const StoreFilterValues = atom<typeof STORE_DEFAULT_VALUES>({
  key: 'SnbGetValues',
  default: STORE_DEFAULT_VALUES,
});
export const SnbQueryString = atom<string>({
  key: 'SnbQueryString',
  default: '',
});
