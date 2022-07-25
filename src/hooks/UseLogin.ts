import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userToken } from '@recoil/userAtom';
import { userLogout } from '@service/getUserApi';

export const UseLoginHooks = () => {
  const accessToken = useRecoilValue(userToken);
  const resetAccessToken = useResetRecoilState(userToken);
  const [tokenExist, setTokenExist] = useState<boolean>(false);

  useEffect(() => {
    setTokenExist(!!accessToken);
  }, [accessToken]); // 로그인 상태 boolean 반환

  const UseLogout = useCallback(() => {
    resetAccessToken(); // accesstoken 리셋
    userLogout(); // 로그아웃 api 호출
    window.location.reload();
  }, [resetAccessToken]);

  return {
    tokenExist,
    UseLogout,
  };
};

export default UseLoginHooks;
