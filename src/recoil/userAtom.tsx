import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { LOCAL_STORAGE_KEY } from '@constants/localStorage';
import { UserInfoType } from '@interfaces/UserInfoType';

const { persistAtom } = recoilPersist();

// eslint-disable-next-line import/prefer-default-export
export const userToken = atom<string | null>({
  key: LOCAL_STORAGE_KEY.ACCESS_TOKEN,
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const userInfo = atom<UserInfoType | undefined>({
  key: LOCAL_STORAGE_KEY.USER_INFO,
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
