import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { LOCAL_STORAGE_KEY } from '@constants/localStorage';

const { persistAtom } = recoilPersist();

// eslint-disable-next-line import/prefer-default-export
export const userToken = atom<string | null>({
  key: LOCAL_STORAGE_KEY.ACCESS_TOKEN,
  default: null,
  effects_UNSTABLE: [persistAtom],
});
