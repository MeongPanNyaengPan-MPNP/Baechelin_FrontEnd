import React from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userToken } from '@recoil/userAtom';

/*
interface PrivateRouteProps {
  children: JSX.Element;
} */

function PrivateRoute({ prevPath }: { prevPath: string }) {
  const userTokenState = useRecoilValue(userToken);
  const locationState: any = useLocation();
  return (
    <div>
      {userTokenState ? (
        <Outlet />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                replace
                to="/login"
                state={{
                  locationState: locationState?.state?.LocationBeforeRoute,
                  prevPath,
                }}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default PrivateRoute;
