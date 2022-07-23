import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginTemplate from '@templates/LoginTemplate';

function Login() {
  const { state }: any = useLocation();

  return (
    <div>
      <LoginTemplate state={state} />
    </div>
  );
  // return <LoginTemplate prevPath="dd" />;
}

export default Login;
