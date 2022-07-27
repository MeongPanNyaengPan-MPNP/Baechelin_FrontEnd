import { atom } from 'recoil';
import { AlertProps } from '@atoms/Alert';

export default atom<AlertProps | null>({
  key: 'modalAtom',
  default: null,
});
export const muiAnchorEl = atom<HTMLButtonElement | null>({
  key: 'muiAnchor',
  default: null,
});
