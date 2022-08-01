// TODO : auth class 만들기
import React from 'react';
import { UseFetchToken } from '@hooks/UseQueryHooks';
import UseLoginHooks from '@hooks/UseLogin';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userToken } from '@recoil/userAtom';

export function SilentLogin() {
  const { pathname } = useLocation();
  const { UseQueryToken } = UseFetchToken();
  const { tokenExist } = UseLoginHooks();
  const token = useRecoilValue(userToken);
  const { refetch } = UseQueryToken(tokenExist, pathname);

  React.useEffect(() => {
    refetch();
  }, [refetch, token]);

  return null;
}

export default SilentLogin;
