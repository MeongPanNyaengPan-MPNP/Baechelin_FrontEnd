import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userToken } from '@recoil/userAtom';

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const userTokenState = useRecoilValue(userToken);
  const path = useLocation();
  return <div>{userTokenState ? children : <Navigate to="/login" state={{ path }} />}</div>;
}

export default PrivateRoute;
