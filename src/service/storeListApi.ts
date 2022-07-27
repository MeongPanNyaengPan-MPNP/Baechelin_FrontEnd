import { UserLoctaionType } from '@interfaces/LocationTypes';
import { request } from './httpClient';

export const getNearStore = <T>(locationData: UserLoctaionType, query = '', topic = 'near', page = 0, size = 12) => {
  const locationQuery = () => (locationData !== null ? `&lat=${locationData.lat}&lng=${locationData.lng}` : '');
  return request<T>({
    method: 'GET',
    url: `/store/${topic}?page=${page}&size=${size}${query}${locationQuery()}`,
  });
};
export const getBookmarkStoreList = <T>(locationData: UserLoctaionType, query = '', limit = 12) => {
  const locationQuery = () => (locationData !== null ? `&lat=${locationData.lat}&lng=${locationData.lng}` : '');
  return request<T>({
    method: 'GET',
    url: `/store/bookmark?limit=${limit}${query}${locationQuery()}`,
  });
};
