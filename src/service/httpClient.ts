import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY } from '@constants/index';

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

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await Api(config);
    return data;
  } catch (err: any) {
    const prevRequest = err.config.request;
    if (err.response.status === 401 && process.env.REACT_APP_MODE === 'production') {
      // TODO : 토큰 조작->강제 로그아웃
      localStorage.clear();
      Api.post('/user/logout');
      console.log('401_error', err);
    }
    if (err.response.status === 402) {
      alert('토큰이 없거나 만료되었습니다');
      localStorage.clear();
      Api.post('/auth/refresh');
      console.log('402_error', 402);
      return prevRequest;
    }
    if (err.response.status === 403) {
      alert('로그인이 필요합니다');
      console.log('403_error', 403);
    }
    throw new Error(err);
  }
};

//

export default Api;
