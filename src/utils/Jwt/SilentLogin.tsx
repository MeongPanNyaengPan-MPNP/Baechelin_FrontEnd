// const JWT_EXPIRY_TIME = 1800 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
// eslint-disable-next-line import/prefer-default-export
// TODO : auth class 만들기
import { useLocation } from 'react-router-dom';
import React from 'react';

import Cookie from 'js-cookie';
import { useQueryClient } from 'react-query';
import { UseFetchToken } from '@hooks/UseQueryHooks';

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

export function SilentLogin({ children }: { children: any }) {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  // eslint-disable-next-line react/react-in-jsx-scope
  const refreshToken = Cookie.get('refresh_token');
  const [refreshTokenState, setRefreshTokenState] = React.useState<boolean>(!!refreshToken);

  const { UseQueryToken } = UseFetchToken();
  const { refetch } = UseQueryToken(refreshTokenState);

  React.useEffect(() => {
    const refreshCookie = Cookie.get('refresh_token');
    setRefreshTokenState(!!refreshCookie);
    console.log('!!refreshCookie', !!refreshCookie);
  }, [pathname, queryClient]); // 페이지 바뀔때마다 refreshCookie 상태 검사

  React.useEffect(() => {
    console.log('silent refetch effect');
    if (refreshTokenState) {
      refetch();
      console.log('refetch');
    } else {
      console.log(refreshTokenState, 'no refetch');
    }
  }, [refetch, refreshTokenState]); // refresh토큰 상태가 바뀌었으면 token 재발급

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
}

export default SilentLogin;
