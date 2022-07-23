import React from 'react';

function LoginButton({ src }: { src: string }) {
  return (
    <a href={src}>
      <img src="/img/ui/kakao_login_medium_narrow.png" alt="카카오 로그인 버튼" />
    </a>
  );
}

export default LoginButton;
