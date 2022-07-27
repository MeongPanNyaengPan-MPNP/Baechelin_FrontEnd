import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userToken } from '@recoil/userAtom';

/*
interface PrivateRouteProps {
  children: JSX.Element;
} */

function PrivateRoute() {
  const userTokenState = useRecoilValue(userToken);
  const locationState: any = useLocation();
  return (
    <div>
      {userTokenState ? (
        <Outlet />
      ) : (
        <Navigate
          replace
          to="/login"
          state={{
            locationState: locationState?.state?.LocationBeforeRoute,
            destinationPath: locationState.pathname,
          }}
        />
      )}
    </div>
  );
}

export default PrivateRoute;
