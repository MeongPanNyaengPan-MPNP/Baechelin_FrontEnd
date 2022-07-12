import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Cookie from 'js-cookie';
import axios from 'axios';

const refreshToken = Cookie.get('refresh_token');

function Oauth() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log('refresh', refreshToken);

  const Api = axios.create({
    headers: { 'Access-Control-Allow-Origin': 'http://15.164.93.211' },
    timeout: 10000,
    baseURL: 'http://15.164.93.211',
    withCredentials: true,
  });

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
