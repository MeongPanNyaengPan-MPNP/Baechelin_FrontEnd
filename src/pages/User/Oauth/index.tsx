import React, { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import userAtom from '@recoil/userAtom';
import { useSetRecoilState } from 'recoil';
import { LOGIN } from '@constants/errorCode';

function Oauth() {
  const [searchParams] = useSearchParams();
  const setUserToken = useSetRecoilState(userAtom);
  const tokenFalse = useCallback((error: string, provider: string) => {
    if (error === LOGIN.ALREADY_LOGIN_ACCOUNT) {
      console.log(`${provider}으로 회원가입`);
    }
  }, []);
  const tokenTrue = useCallback(
    (token: string) => {
      setUserToken(token);
    },
    [setUserToken],
  );
  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      const error = searchParams.get('error');
      const provider = searchParams.get('provider_type');
      if (error && provider) tokenFalse(error, provider);
    } else {
      tokenTrue(token);
    }
  }, [searchParams, setUserToken, tokenFalse, tokenTrue]);
  return <div>로그인중</div>;
}

export default Oauth;
