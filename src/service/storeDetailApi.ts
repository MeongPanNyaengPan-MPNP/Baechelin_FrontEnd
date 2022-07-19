import { request } from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getStoreDetail = <T>(storeId: number) =>
  request<T>({
    method: 'GET',
    url: `/store/detail/${storeId}`,
  });
