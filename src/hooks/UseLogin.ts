import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userInfo, userToken } from '@recoil/userAtom';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';

export const getToken = (tokenName: string = LOCAL_STORAGE_KEY.ACCESS_TOKEN) => {
  const localToken = localStorage.getItem('recoil-persist');
  if (localToken) {
    const tokenParseJson = JSON.parse(localToken);
    if (tokenParseJson !== '') {
      const token = tokenParseJson[tokenName];
      return token;
    }
  }
};

export const UseLoginHooks = () => {
  const accessToken = useRecoilValue(userToken);
  const resetAccessToken = useResetRecoilState(userToken);
  const resetUserInfo = useResetRecoilState(userInfo);
  const [tokenExist, setTokenExist] = useState<boolean>(false);

  useEffect(() => {
    setTokenExist(!!accessToken);
  }, [accessToken]); // 로그인 상태 boolean 반환

  const ResetUserInfo = useCallback(() => {
    // 사용자가 누를때만
    resetAccessToken(); // accesstoken 리셋
    resetUserInfo(); // accesstoken 리셋
  }, [resetAccessToken, resetUserInfo]);

  return {
    tokenExist,
    ResetUserInfo,
  };
};

export default UseLoginHooks;
