import { atom } from 'recoil';
import { UserLoctaionType } from '@interfaces/LocationTypes';

export default atom<UserLoctaionType>({
  key: 'locationAtom',
  default: {
    lat: null,
    lng: null,
  },
});
