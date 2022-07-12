import React from 'react';

function Login() {
  return (
    <div>
      <a href="http://15.164.93.211/oauth2/authorization/kakao?redirect_uri=http://localhost:12345/user/oauth/redirect">
        <img src="/ui/kakao_login_medium_narrow.png" alt="카카오 로그인 버튼" />
      </a>
    </div>
  );
}

export default Login;
