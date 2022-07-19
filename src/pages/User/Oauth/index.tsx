import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Cookie from 'js-cookie';
import Api from '@service/httpClient';

const refreshToken = Cookie.get('refresh_token');

function Oauth() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log('refresh', refreshToken);

  Api.interceptors.request.use((config) => {
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
    return config;
  });
  const getUser = () => {
    Api.get('/user')
      .then((res) => console.log(res.data))
      .catch((e) => {
        Api.get('/auth/refresh').then((res) => {
          console.log(e);
          console.log('new Response', res);
        });
      });
  };
  return (
    <>
      <div>access : {token}</div>
      <div>refresh : {refreshToken}</div>
      <button type="button" onClick={() => alert(document.cookie)}>
        Check Cookie
      </button>
      <button type="button" onClick={getUser}>
        유저정보 가져오기
      </button>
    </>
  );
}

export default Oauth;
