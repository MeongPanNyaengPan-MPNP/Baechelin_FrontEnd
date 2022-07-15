import axios, { AxiosRequestConfig } from 'axios';

const API_DEV = 'http://3.39.221.218:9000/';
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
  headers: { 'Access-Control-Allow-Origin': 'http://15.164.93.211' },
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

export const request = async <T = unknown>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const { data } = await Api(config);

    if (data.code === 200) {
      return data.data;
    }
    throw new Error(data.code);
  } catch (err: any) {
    console.error(err);

    throw new Error(err);
  }
};

//

export default Api;
