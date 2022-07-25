// TODO : auth class 만들기
import React from 'react';
import { useQueryClient } from 'react-query';
import { UseFetchToken } from '@hooks/UseQueryHooks';
import { USER } from '@constants/useQueryKey';
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
  const queryClient = useQueryClient();
  const { UseQueryToken } = UseFetchToken();
  const { tokenExist } = UseLoginHooks();
  UseQueryToken(tokenExist, pathname);

  console.log('silentLoginComponent mount');

  React.useEffect(() => {
    queryClient.invalidateQueries(USER.TOKEN);
    console.log('silentLogin useEffect');
  }, [queryClient, tokenExist]); // 페이지 바뀔때마다 refreshCookie 상태 검사

  return null;
}

export default SilentLogin;
