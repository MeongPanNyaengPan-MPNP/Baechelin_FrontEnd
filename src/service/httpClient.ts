import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY } from '@constants/index';
import { isExp } from '@utils/Jwt/jwtDecoded';

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
    /* 만료 체크 */
    if (!isExp(token)) {
      localStorage.clear();
      Api.post('/user/logout');
      console.log(isExp(token), '유효기간 토큰삭제');
    } else if (token) {
      /* 정상토큰이면 셋팅 */
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
    } else if (err.response.status === 402) {
      Api.post('/auth/refresh');
      console.log('402_error', 402);
      return prevRequest;
    } else if (err.response.status === 403) {
      console.log('403_error', 403);
    }
    throw new Error(err);
  }
};

//

export default Api;
