import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export default atom<string | null>({
  key: 'userToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
