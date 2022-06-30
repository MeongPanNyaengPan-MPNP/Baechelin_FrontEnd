import React, {useEffect} from "react";
import {Navigate,Outlet} from "react-router-dom";
import { useRecoilValue } from 'recoil';
import userToken from "@recoil/userAtom"

interface PrivateRouteProps {
  path?: string;
}

function PrivateRoute({path}: PrivateRouteProps) {
  const token = useRecoilValue(userToken)
  const isLogin = !!token
  console.log('private',token,isLogin)
  useEffect(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다')
    }
  }, [isLogin])
  console.log('path',path)
  return (
    <div>
      {
        isLogin ?
          <Outlet/>
          : <Navigate to="/login" state={path}/>
      }
    </div>
  )
}

export default PrivateRoute
