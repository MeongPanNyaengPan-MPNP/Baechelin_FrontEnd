import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY, LOGIN } from '@constants/index';
import { userLogout } from '@service/getUserApi';
import { useQuery } from 'react-query';

const API_DEV = process.env.REACT_APP_API_DEV;
const API_PROD = process.env.REACT_APP_API_PROD;
const baseURL = process.env.REACT_APP_MODE === 'development' ? API_DEV : API_PROD;
// 토큰 가져오기
const getToken = (tokenName: string) => {
  const localToken = localStorage.getItem('recoil-persist');
  if (localToken) {
    const tokenParseJson = JSON.parse(localToken);
    if (tokenParseJson !== '') {
      const token = tokenParseJson[tokenName];
      return token;
    }
  }
};
const Api = axios.create({
  timeout: 10000,
  baseURL: `${baseURL}`,
  withCredentials: true,
});
Api.interceptors.request.use(
  (config) => {
    const token = getToken(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (error) => Promise.reject(error),
);
Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.code === LOGIN.WRONG_TYPE_SIGNATURE) {
      console.log('WRONG_TYPE_SIGNATURE');
      userLogout();
    }
    if (error.code === LOGIN.WRONG_TYPE_TOKEN) {
      console.log('WRONG_TYPE_TOKEN');
      userLogout();
    }
    if (error.code === LOGIN.EXPIRED_TOKEN) {
      useQuery(['access-token', '/']);
    }
  },
);

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await Api(config);
    return data;
  } catch (err: any) {
    console.error(err);

    throw new Error(err);
  }
};

//

export default Api;
