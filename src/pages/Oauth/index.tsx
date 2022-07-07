import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Oauth() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  axios.defaults.baseURL = 'https://www.abc.com';
  axios.defaults.withCredentials = true;
  return <div />;
}

export default Oauth;
