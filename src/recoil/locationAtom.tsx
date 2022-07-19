import { atom } from 'recoil';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export default atom<UserLoctaionType>({
  key: 'locationAtom',
  default: {
    lat: null,
    lng: null,
  },
  effects_UNSTABLE: [persistAtom],
});
