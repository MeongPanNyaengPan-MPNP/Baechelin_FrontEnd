import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


import { useSetRecoilState } from 'recoil';
import userToken from '@recoil/userAtom';


interface LoginProps {
  prevPath?: string;
}

function Login({ prevPath }: LoginProps) {
  const setUserToken = useSetRecoilState(userToken);
  const navigate = useNavigate();
  const login = useCallback(() => {
    setUserToken('Meow');
    if (prevPath) {
      return navigate(prevPath);
    }
    return navigate('/');

  }, [navigate, prevPath, setUserToken]);
  return (
    <div>
      <button type='button' onClick={login}>로그인!</button>

      {/*
      <a
        href="https://kauth.kakao.com/oauth/authorize?client_id=1db0c5eb9c2fdd2ba5412540e5d9a37b&redirect_uri=
http://localhost:12345/user/oauth/kakao&response_type=code">
        <img src="/ui/kakao_login_medium_narrow.png" alt="카카오 로그인 버튼"/>
      </a>
      */}
    </div>
  );
}

export default Login;
