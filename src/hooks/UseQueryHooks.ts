import { getBookmarkStoreList, getNearStore } from '@service/storeListApi';
import { useQuery } from 'react-query';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { getRecentReviewList } from '@service/reviewApi';

const queryOption = {
  staleTime: Infinity,
  cacheTime: Infinity,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  retry: 0,
};

export const UseStoreListHooks = <T>(currentLocation: UserLoctaionType) => {
  // 주변업장 리스트
  const UseGetStoreList = (key: string, queryString: string, listTopic: string) =>
    useQuery<T>(
      [key, queryString, currentLocation],
      () => getNearStore(currentLocation, queryString, listTopic),
      queryOption,
    );

  const UseGetBookmarkStoreList = (key: string, queryString: string) =>
    useQuery<T>(
      [key, queryString, currentLocation],
      () => getBookmarkStoreList(currentLocation, queryString),
      queryOption,
    );
  return {
    UseGetStoreList,
    UseGetBookmarkStoreList,
  };
};

export const UseReviewList = () => {
  // 메인에 위치한 실시간 리뷰
  const UseRecentReviewForMain = <T>(key: string, limit?: number) =>
    useQuery<T>([key], () => getRecentReviewList(limit), queryOption);
  return { UseRecentReviewForMain };
};
