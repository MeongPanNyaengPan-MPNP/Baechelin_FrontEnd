import { getNearStore } from '@service/storeListApi';
import { useQuery } from 'react-query';
import { UserLoctaionType } from '@interfaces/LocationTypes';

const queryOption = {
  staleTime: Infinity,
  cacheTime: Infinity,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  retry: 0,
};

// eslint-disable-next-line import/prefer-default-export
export const useQueryAtLocation = <T>(currentLocation: UserLoctaionType) => {
  const useArroundStoreList = (key: string, queryString: string) =>
    useQuery<T>([key, queryString], () => getNearStore(currentLocation, queryString), queryOption);
  return {
    currentLocation,
    useArroundStoreList,
  };
};
