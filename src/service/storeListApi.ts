import { UserLoctaionType } from '@interfaces/LocationTypes';
import Api from './httpClient';

// eslint-disable-next-line import/prefer-default-export
export const getNearStore = (page: number, size: number, locationData: UserLoctaionType, filter?: string) => {
  console.log(`go`, filter);
  Api.get(`/store/near?page=${page}&size=${size}${filter}`, { data: locationData }).then((res) => console.log(res));
  return Api.get(`/store/near?page=${page}&size=${size}${filter}`, { data: locationData });
};
