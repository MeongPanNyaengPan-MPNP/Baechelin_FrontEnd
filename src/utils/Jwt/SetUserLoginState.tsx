export {};
/*
import React from 'react';
import { tokenRefresh } from '@service/getUserApi';
import { useSetRecoilState } from 'recoil';
import userAtom from '@recoil/userAtom';

function SetUserLoginState({ children }: any) {
  const setUserToken = useSetRecoilState(userAtom);
  const silentLogin = () => {
    tokenRefresh().then((res: any) => {
      const newAccessToken = res.token;
      setUserToken(newAccessToken);
    });
  };

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default SetUserLoginState;
*/
