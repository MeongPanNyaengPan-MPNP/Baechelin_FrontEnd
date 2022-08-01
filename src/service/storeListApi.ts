import { UserLoctaionType } from '@interfaces/LocationTypes';
import { request } from './httpClient';

export const getNearStore = <T>(locationData: UserLoctaionType, query = '', topic = 'near', page = 0, size = 20) => {
  const locationQuery = () => (locationData !== null ? `&lat=${locationData.lat}&lng=${locationData.lng}` : '');
  return request<T>({
    method: 'GET',
    url: `/store/${topic}?page=${page}&size=${size}${query}${locationQuery()}`,
  });
};
export const getSearchStore = <T>(
  snbQuery: string | undefined,
  location: string | undefined,
  keyword = '',
  page = 0,
  size = 20,
) =>
  request<T>({
    method: 'GET',
    url: `/store/search?page=${page}&size=${size}&keyword=${keyword}${location && `${location}`}${
      snbQuery && `${snbQuery}`
    }`,
  });

export const getBookmarkStoreList = <T>(locationData: UserLoctaionType, query = '', limit = 20) => {
  const locationQuery = () => (locationData !== null ? `&lat=${locationData.lat}&lng=${locationData.lng}` : '');
  return request<T>({
    method: 'GET',
    url: `/store/bookmark?limit=${limit}${query}${locationQuery()}`,
  });
};
export const getNearStoreAtMap = <T>(locationData: string, query = '', page = 0, size = 20) =>
  // const paging = page ? `&page=${page}&size=${size}` : null;
  request<T>({
    method: 'GET',
    url: `/store/near-map?${locationData}${query}&page=${page}&size=${size}`,
  });

export const getSido = <T>(sido: string) =>
  request<T>({
    method: 'GET',
    url: `/store/location/sigungu?sido=${sido}`,
  });
