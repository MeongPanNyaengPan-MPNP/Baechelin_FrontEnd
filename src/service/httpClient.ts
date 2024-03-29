import axios, { AxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY } from '@constants/index';
import { isExist, isExp } from '@utils/Jwt/jwtDecoded';
import { userLogout } from '@service/getUserApi';
import { getToken } from '@hooks/UseLogin';

const API_DEV = process.env.REACT_APP_API_DEV;
const API_PROD = process.env.REACT_APP_API_PROD;
const baseURL = process.env.REACT_APP_MODE === 'development' ? API_DEV : API_PROD;
// 토큰 가져오기

const Api = axios.create({
  timeout: 10000,
  baseURL: `${baseURL}`,
  withCredentials: true,
});
Api.interceptors.request.use((config) => {
  const token = getToken(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  /* 만료 체크 */
  if (isExist(token) && !isExp(token)) {
    console.log('만료된 토큰');
  } else if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
});
Api.interceptors.response.use(
  (response) => response,
  async (err) => {
    const prevRequest = err.config.request;
    const token = getToken(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    if (err.response.status === 401) {
      // TODO : 토큰 조작->강제 로그아웃
      if (isExist(token)) {
        localStorage.clear();
      }
      userLogout();
    } else if (err.response.status === 402) {
      // access 만료
      console.log('402_error', 402, err.response);
      return prevRequest;
    } else if (err.response.status === 403) {
      console.log('403_error', 403, err.response);
    }
  },
);

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await Api(config);
    return data;
  } catch (err: any) {
    console.log(err.message);
    throw new Error(err);
  }
};

//

export default Api;
