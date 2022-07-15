import { request } from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getStoreDetail = (storeId: number) => request({ method: 'GET', url: `/store/detail/${storeId}` });
