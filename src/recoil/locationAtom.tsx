import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserLoctaionType } from '@interfaces/LocationTypes';

const { persistAtom } = recoilPersist();

export default atom<UserLoctaionType>({
  key: 'locationAtom',
  default: {
    lat: 37.57596175837729, // 광화문
    lng: 126.97686102109607,
  },
  effects_UNSTABLE: [persistAtom],
});
