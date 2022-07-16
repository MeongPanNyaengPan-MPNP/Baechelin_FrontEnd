import { UserLoctaionType } from '@interfaces/LocationTypes';
import Api from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getNearStore = (page: number, size: number, locationData: UserLoctaionType, query?: string) => {
  console.log('APIQUERY', query);
  return Api.get(`/store/near?page=${page}&size=${size}${query}`, { data: locationData });
};
