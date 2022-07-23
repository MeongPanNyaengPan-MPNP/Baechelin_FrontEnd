import React from 'react';
import LoginButton from '@molecules/LoginButton';
import { useNavigate } from 'react-router-dom';
import Buttons from '@atoms/Buttons';

function SocialLoginBox({ state }: { state: any }) {
  const navigate = useNavigate();
  const socialLink = {
    kakao: `http://api.bae-chelin.com/oauth2/authorization/kakao?redirect_uri=
https://bae-chelin.com/user/oauth/redirect/${state?.path.pathname.split('/').join('-') || ''}`,
  };

  const redirect = React.useCallback(() => {
    navigate(`/user/oauth/redirect/${state?.path.pathname.split('/').join('-') || ''}`);
  }, [navigate, state?.path.pathname]);

  return (
    <div>
      <Buttons type="button" onClick={redirect}>
        리다이렉트
      </Buttons>
      <LoginButton src={socialLink.kakao} />
    </div>
  );
}

export default SocialLoginBox;
