import React from 'react';
import LoginButton from '@molecules/LoginButton';

function SocialLoginButtons() {
  const socialLink = {
    kakao:
      'http://3.39.221.218:9000/oauth2/authorization/kakao?redirect_uri=http://localhost:12345/user/oauth/redirect',
  };

  return (
    <div>
      <LoginButton src={socialLink.kakao} />
    </div>
  );
}

export default SocialLoginButtons;
