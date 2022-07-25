import React from 'react';
import ModalTemplates from '@templates/ModalTemplates';
import SocialLoginBox from '@organisms/SocialLoginBox';

function Login() {
  return (
    <ModalTemplates>
      <SocialLoginBox />
    </ModalTemplates>
  );
  // return <LoginTemplate prevPath="dd" />;
}

export default Login;
