// const JWT_EXPIRY_TIME = 1800 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
// eslint-disable-next-line import/prefer-default-export
// TODO : auth class 만들기
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useQueryClient } from 'react-query';
import { UseFetchToken, UseUserQuery } from '@hooks/UseQueryHooks';

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
  const [userInfoState, setUserInfoState] = React.useState<boolean>(false);

  const { UseQueryToken } = UseFetchToken();
  const { dataUpdatedAt, refetch } = UseQueryToken(userInfoState);
  const { UseGetUserInfo } = UseUserQuery();
  const { isSuccess: userState } = UseGetUserInfo();
  React.useEffect(() => {
    console.log('getUserInfo isSuccess', userState);
    setUserInfoState(userState);
  }, [userState, pathname, queryClient]); // 페이지 바뀔때마다 refreshCookie 상태 검사

  React.useEffect(() => {
    console.log('silent refetch effect', userInfoState);
    if (userInfoState) {
      refetch();
      console.log('refetch', dataUpdatedAt);
    } else {
      console.log(userInfoState, 'no refetch');
    }
  }, [dataUpdatedAt, refetch, userState, userInfoState]); // refresh토큰 상태가 바뀌었으면 token 재발급

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
}

export default SilentLogin;
