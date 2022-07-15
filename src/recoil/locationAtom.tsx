import { atom } from 'recoil';
import { UserLoctaionType } from '@interfaces/LocationTypes';

export default atom<UserLoctaionType | null>({
  key: 'locationAtom',
  default: null,
});
