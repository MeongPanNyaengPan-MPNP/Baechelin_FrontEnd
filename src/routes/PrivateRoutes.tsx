import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from '@constants/localStorage';

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  const path = useLocation();
  return <div>{token ? children : <Navigate to="/login" state={{ path }} />}</div>;
}

export default PrivateRoute;
