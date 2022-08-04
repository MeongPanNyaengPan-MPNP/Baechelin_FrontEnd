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
  const token = searchParams.get('token');
  const tokenNotFound = useCallback(
    (error: string, provider?: string | null) => {
      if (provider !== null && error === LOGIN.ALREADY_LOGIN_ACCOUNT) {
        setSnackBar((prev) => [...prev, `${provider}로 로그인 해주세요.`]);
      } else {
        setSnackBar((prev) => [...prev, '알 수 없는 오류입니다.']);
      }
    },
    [setSnackBar],
  );
  const tokenExistCallBack = useCallback(
    async (gettoken: string) => {
      setUserTokenState(gettoken);
    },
    [setUserTokenState],
  );

  useEffect(() => {
    if (!token) {
      const error = searchParams.get('error');
      const provider = searchParams.get('provider_type');
      if (error) {
        tokenNotFound(error, provider);
      } else {
        setSnackBar((prev) => [...prev, '올바르지 못한 접근입니다.']);
      }
    } else {
      tokenExistCallBack(token);
      setSnackBar((prev) => [...prev, '로그인 완료']);
    }
    const pathArray = prevPath?.split('-').join('/');

    if (prevPath === undefined) {
      navigate('/'); // 이전 주소를 알 수 없을 때
    } else if (prevPath && pathArray) {
      navigate(`${pathArray}`);
    }
  }, [navigate, prevPath, searchParams, setSnackBar, token, tokenExistCallBack, tokenNotFound]);

  return <div />;
}

export default Oauth;
