// TODO : auth class 만들기
import React from 'react';
import { UseFetchToken } from '@hooks/UseQueryHooks';
import UseLoginHooks from '@hooks/UseLogin';
import { useLocation } from 'react-router-dom';

/*

export const loginSuccess = (res: AxiosResponse<{ access_token: string }>) => {
  const { access_token: accessToken } = res.data;
  setTokenStorage(accessToken);
  const silentLogin = setTimeout(() => {
    clearTimeout(silentLogin);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    UseSilentLogin();
  }, 5000);
};
*/

export function SilentLogin() {
  const { pathname } = useLocation();
  const { UseQueryToken } = UseFetchToken();
  const { tokenExist } = UseLoginHooks();
  const { refetch } = UseQueryToken(tokenExist, pathname);

  React.useEffect(() => {
    refetch();
  }, [pathname, refetch]);


  return null;
}

export default SilentLogin;
