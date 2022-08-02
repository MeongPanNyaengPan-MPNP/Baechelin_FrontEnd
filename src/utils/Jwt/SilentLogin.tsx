// TODO : auth class 만들기
import { UseFetchToken } from '@hooks/UseQueryHooks';
import { useLocation } from 'react-router-dom';

export function SilentLogin() {
  const { pathname } = useLocation();
  const { UseQueryToken } = UseFetchToken();
  UseQueryToken(pathname);

  return null;
}

export default SilentLogin;
