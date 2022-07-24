// const JWT_EXPIRY_TIME = 1800 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
// eslint-disable-next-line import/prefer-default-export
// TODO : auth class 만들기
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useQueryClient } from 'react-query';
import { UseFetchToken, UseUserQuery } from '@hooks/UseQueryHooks';
import { USER } from '@constants/useQueryKey';

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
  const { data, dataUpdatedAt } = UseQueryToken(userInfoState);
  const { UseGetUserInfo } = UseUserQuery();
  const { isSuccess: userState } = UseGetUserInfo();
  React.useEffect(() => {
    queryClient.invalidateQueries(USER.TOKEN);
    console.log('getUserInfo isSuccess', userState);
    console.log('getuserInfodata', UseGetUserInfo);
    console.log('queryToken', data, dataUpdatedAt);
    setUserInfoState(userState);
  }, [UseGetUserInfo, data, pathname, dataUpdatedAt, queryClient, userState]); // 페이지 바뀔때마다 refreshCookie 상태 검사

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
}

export default SilentLogin;
