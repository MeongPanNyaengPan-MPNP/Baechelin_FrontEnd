import { UserLoctaionType } from '@interfaces/LocationTypes';
import { request } from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getNearStore = <T>(locationData: UserLoctaionType, query = '', page = 0, size = 12) => {
  const locationQuery = () => (locationData !== null ? `&lat=${locationData.lat}&lng=${locationData.lng}` : '');
  const defaultLocation = '&lat=37.55328547489251&lng=126.97260152154756 ';
  console.log('url', `/store/near?page=${page}&size=${size}${query}${locationQuery()}`);
  return request<T>({
    method: 'GET',
    url: `/store/near?page=${page}&size=${size}${query}${defaultLocation}`,
  });
};
