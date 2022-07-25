// const JWT_EXPIRY_TIME = 1800 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
// eslint-disable-next-line import/prefer-default-export
// TODO : auth class 만들기
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useQueryClient } from 'react-query';
import { UseFetchToken, UseUserQuery } from '@hooks/UseQueryHooks';
import { USER } from '@constants/useQueryKey';
import Cookies from 'js-cookie';

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
  const [userTokenState, setUserTokenState] = React.useState<boolean>(false);
  const { UseQueryToken } = UseFetchToken();
  const { UseGetUserInfo } = UseUserQuery();
  const { isSuccess, data: userInfo } = UseGetUserInfo();
  const refreshToken = Cookies.get('refresh_token');
  console.log('refreshToken', refreshToken);
  console.log('userInfo', userInfo);
  //  const { isSuccess: userState } = UseGetUserInfo();

  UseQueryToken(userTokenState);
  React.useEffect(() => {
    setUserTokenState(isSuccess);
    queryClient.invalidateQueries(USER.TOKEN);
    console.log('userData for refreshToken', isSuccess);
    console.log('invalidateQueries');
  }, [pathname, queryClient, isSuccess]); // 페이지 바뀔때마다 refreshCookie 상태 검사

  return null;
}

export default SilentLogin;
