import { getBookmarkStoreList, getNearStore, getNearStoreAtMap } from '@service/storeListApi';
import { useQuery } from 'react-query';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { getRecentReviewList, getReviewList } from '@service/reviewApi';
import { TokenResponseType, UserInfoType } from '@interfaces/TokenType';
import { getUserInfo, tokenRefresh } from '@service/getUserApi';
import { useSetRecoilState } from 'recoil';
import { userToken } from '@recoil/userAtom';
import { MAP, USER } from '@constants/useQueryKey';

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
export const UseMapQuery = <T>() => {
  const UseMapData = (latingQuery: string, queryString: string) =>
    useQuery<T | false>([MAP.MAP_STORE, latingQuery, queryString], () => getNearStoreAtMap(latingQuery, queryString), {
      staleTime: 6000,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      onError: (err) => {
        console.log('err', err);
      },
    });
  return { UseMapData };
};

export const UseReviewList = () => {
  // 메인에 위치한 실시간 리뷰
  console.log('list');
  const UseRecentReviewForMain = <T>(key: string, limit?: number) =>
    useQuery<T>([key], () => getRecentReviewList(limit), {
      staleTime: 0,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 0,
    });
  const UseDetailReview = <T>(key: string, storeId: number) =>
    useQuery<T>([key], () => getReviewList(storeId), {
      staleTime: 0,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 0,
    });

  return {
    UseRecentReviewForMain,
    UseDetailReview,
  };
};

export const UseFetchToken = () => {
  const setUserTokenState = useSetRecoilState(userToken);

  const UseQueryToken = (loginState: boolean, pathname?: string) =>
    useQuery<TokenResponseType>([USER.TOKEN, loginState, pathname], () => tokenRefresh(), {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      refetchInterval: 1 * 60 * 1000, // 1분
      refetchIntervalInBackground: true,
      enabled: loginState,
      onSuccess: (data) => {
        console.log('useQueryToken onSuccess', data);
        setUserTokenState(data.token);
      },
      onError: (err) => {
        console.log('useQueryToken ERROR', err);
        console.log(err);
      },
    });
  return { UseQueryToken };
};
export const UseUserQuery = () => {
  const UseGetUserInfo = () => useQuery<UserInfoType>(USER.INFO, () => getUserInfo(), queryOption);
  return { UseGetUserInfo };
};
