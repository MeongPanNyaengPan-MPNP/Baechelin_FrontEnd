import axios from "axios";


const API_DEV = 'http://localhost:10004'
const API_PRODUCT = 'http://localhost:10004'
const baseURL = process.env.NODE_ENV === "development" ? API_DEV : API_PRODUCT;

// 토큰 가져오기
const getToken = (tokenName: string) => {
  const localToken = localStorage.getItem('recoil-persist');
  if (localToken) {
    const tokenParseJson = JSON.parse(localToken)
    if (tokenParseJson !== '') {
      const token = tokenParseJson[tokenName]
      return token
    }
  }
}
// 기본 axios
const axiosApi = (url: string, options?: object) => {
  const instanceDefault = axios.create({
    baseURL: `${url}`,
    ...options
  });
  return instanceDefault;
};
// 토큰 axios
const authTokenInstance = axios.create({
  timeout: 10000,
  baseURL: `${baseURL}`
});
authTokenInstance.interceptors.request.use(
  (config) => {
    const token = getToken('userToken')
    // 토큰만료 체크 필요
    if (token) {
      config.headers = {'X-AUTH-TOKEN': `${token}`,}
    }
    try {
      return config
    } catch (err) {
      console.error(`[_axios.interceptors.request] config : ${err}`);
    }
    return config
  }
)

export const defaultInstance = axiosApi(baseURL);
export const authInstance = authTokenInstance;
