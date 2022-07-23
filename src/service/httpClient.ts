import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY } from '@constants/index';
import { userLogout } from '@service/getUserApi';
import { UseFetchToken } from '@hooks/UseQueryHooks';

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
const forceLogout = () => {
  console.log('보안상의 문제로 인해 로그아웃 되었습니다');
  localStorage.removeItem('recoil-persist');
  userLogout();
  window.location.reload();
};
console.log(forceLogout);
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
    const prevRequest = error.config.request;
    if (error.response.status === 401) {
      console.log(error);
    } else if (error.response.status === 402) {
      const { UseQueryToken } = UseFetchToken();
      const { refetch } = UseQueryToken(true);
      refetch();
      console.log('토큰 재요청', error, prevRequest);
      return prevRequest();
    }
    console.log('http', error.response.data.message);
  },
);

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await Api(config);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

//

export default Api;
