import axios, { AxiosRequestConfig } from 'axios';

const API_DEV = process.env.REACT_APP_DEV_SERVER;
const baseURL = process.env.NODE_ENV === 'development' ? API_DEV : API_DEV;

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
  headers: { 'Access-Control-Allow-Origin': process.env.PUBLIC_URL },
  timeout: 10000,
  baseURL: `${baseURL}`,
  withCredentials: true,
});

Api.interceptors.request.use((config) => {
  const token = getToken('access_token');
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
});

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
