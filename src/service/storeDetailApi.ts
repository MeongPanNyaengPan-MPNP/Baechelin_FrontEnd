import { AxiosRequestConfig } from 'axios';

import Api from './httpClient';

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

export const getStoreDetail = (storeId: number) => request({ method: 'GET', url: `/store/detail/${storeId}` });
