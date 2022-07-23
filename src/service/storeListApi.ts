import { UserLoctaionType } from '@interfaces/LocationTypes';
import { request } from './httpClient';

export const getNearStore = <T>(locationData: UserLoctaionType, query = '', topic = 'near', page = 0, size = 12) => {
  const lat = 37.55853959813331;
  const lng = 126.9627248474625;
  // const locationQuery = () => (locationData !== null ? `&lat=${lat}&lng=${lng}` : '');
  return request<T>({
    method: 'GET',
    url: `/store/${topic}?page=${page}&size=${size}${query}&lat=${lat}&lng=${lng}`,
  });
};
export const getBookmarkStoreList = <T>(locationData: UserLoctaionType, query = '', limit = 12) => {
  const lat = 37.55853959813331;
  const lng = 126.9627248474625;
  const locationQuery = () => (locationData !== null ? `&lat=${lat}&lng=${lng}` : '');
  return request<T>({
    method: 'GET',
    url: `/store/bookmark?limit=${limit}${query}${locationQuery()}`,
  });
};
