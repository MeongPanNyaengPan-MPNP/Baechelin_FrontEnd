// TODO : auth class 만들기
import { UseFetchToken } from '@hooks/UseQueryHooks';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userToken } from '@recoil/userAtom';

export function SilentLogin() {
  const { pathname } = useLocation();
  const { UseQueryToken } = UseFetchToken();
  const accessToken = useRecoilValue(userToken);
  console.log(!!accessToken);
  UseQueryToken(!!accessToken, pathname);
  console.log('silent');
  return null;
}

export default SilentLogin;
