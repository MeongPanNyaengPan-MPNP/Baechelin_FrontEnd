// const JWT_EXPIRY_TIME = 1800 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
// eslint-disable-next-line import/prefer-default-export
// TODO : auth class 만들기
import { useLocation } from 'react-router-dom';
import React from 'react';
import { userToken } from '@recoil/userAtom';
import { useSetRecoilState } from 'recoil';

import Cookie from 'js-cookie';
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
  const setUserTokenState = useSetRecoilState(userToken);
  const refreshToken = Cookie.get('refresh_token');
  const { UseQueryToken } = UseFetchToken();
  console.log('silent');
  // eslint-disable-next-line react/react-in-jsx-scope
  const { data, isSuccess, isError, error } = UseQueryToken(pathname, !!refreshToken);
  React.useEffect(() => {
    if (isSuccess) {
      setUserTokenState(data.access_token);
    }
    if (isError) {
      console.log(error);
    }
  }, [UseQueryToken, data?.access_token, error, isError, isSuccess, pathname, refreshToken, setUserTokenState]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
}

export default SilentLogin;
