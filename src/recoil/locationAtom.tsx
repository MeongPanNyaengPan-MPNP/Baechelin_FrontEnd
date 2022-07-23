import { atom } from 'recoil';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export default atom<UserLoctaionType | null>({
  key: 'user_location',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
