import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { LOGIN } from '@constants/errorCode';
import snackBarAtom from '@recoil/snackBarAtom';
import { userToken } from '@recoil/userAtom';

function Oauth() {
  const { prevPath } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setSnackBar = useSetRecoilState(snackBarAtom);

  const setUserTokenState = useSetRecoilState(userToken);

  const tokenNotFound = useCallback((error: string, provider?: string | null) => {
    if (provider !== null && error === LOGIN.ALREADY_LOGIN_ACCOUNT) {
      console.log(`${provider}으로 회원가입`);
    } else {
      alert('알 수 없는 오류입니다.');
    }
  }, []);
  const tokenExist = useCallback(
    (token: string) => {
      setUserTokenState(token);
    },
    [setUserTokenState],
  );
  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      const error = searchParams.get('error');
      const provider = searchParams.get('provider_type');
      if (error) {
        tokenNotFound(error, provider);
      } else {
        alert('올바르지 못한 접근입니다.');
      }
    } else {
      tokenExist(token);
      setSnackBar((prev) => [...prev, '로그인 완료']);
    }
    const pathArray = prevPath?.split('-').join('/');
    window.location.href = `${pathArray || '/'}`;
  }, [navigate, prevPath, searchParams, setSnackBar, tokenExist, tokenNotFound]);

  return <div />;
}

export default Oauth;
