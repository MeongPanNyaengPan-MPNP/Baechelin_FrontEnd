import React from 'react';
import SocialLoginBox from '@organisms/SocialLoginBox';

function LoginTemplate({ state }: { state: any }) {
  return <SocialLoginBox state={state} />;
}

export default LoginTemplate;
