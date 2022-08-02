// TODO : auth class 만들기
import { UseFetchToken } from '@hooks/UseQueryHooks';
import UseLoginHooks from '@hooks/UseLogin';
import { useLocation } from 'react-router-dom';

export function SilentLogin() {
  const { pathname } = useLocation();
  const { UseQueryToken } = UseFetchToken();
  const { tokenExist } = UseLoginHooks();
  UseQueryToken(tokenExist, pathname);
  console.log('silent');
  return null;
}

export default SilentLogin;
