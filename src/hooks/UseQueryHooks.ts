import { getBookmarkStoreList, getNearStore, getNearStoreAtMap, getSearchStore } from '@service/storeListApi';
import { useMutation, useQuery } from 'react-query';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { deleteReviewList, getRecentReviewList, getReviewList } from '@service/reviewApi';
import { TokenResponseType } from '@interfaces/TokenType';
import { getUserInfo, tokenRefresh } from '@service/getUserApi';
import { useSetRecoilState } from 'recoil';
import { userInfo, userToken } from '@recoil/userAtom';
import { MAP, USER } from '@constants/useQueryKey';
import { getToken } from '@hooks/UseLogin';

const basicOption = {
  staleTime: 10000,
  cacheTime: Infinity,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  retry: 0,
};
const enabledOption = (enabled: boolean) => ({
  staleTime: 10000,
  cacheTime: Infinity,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  retry: 0,
  enabled,
});
export const UseStoreListHooks = <T>(currentLocation: UserLoctaionType) => {
  // 주변업장 리스트
  const UseGetStoreList = (
    key: string,
    queryString: string,
    listTopic: string | undefined,
    page?: number | undefined,
    size?: number | undefined,
  ) =>
    useQuery<T>(
      [key, queryString, currentLocation, page],
      () => getNearStore(currentLocation, queryString, listTopic, page, size),
      enabledOption(!!listTopic),
    );
  // 북마크 리스트
  const UseGetBookmarkStoreList = (key: string, queryString: string) =>
    useQuery<T>(
      [key, queryString, currentLocation],
      () => getBookmarkStoreList(currentLocation, queryString),
      basicOption,
    );
  // 검색 리스트
  const UseGetSearchStoreList = (
    key: string,
    queryString: string | undefined,
    locationQueryString: string | undefined,
    keyword: string | undefined,
    page?: number | undefined,
    size?: number | undefined,
  ) =>
    useQuery<T>(
      [key, queryString, locationQueryString, keyword, page],
      () => getSearchStore(queryString, locationQueryString, keyword, page, size),
      enabledOption(!!keyword),
    );

  return {
    UseGetStoreList,
    UseGetBookmarkStoreList,
    UseGetSearchStoreList,
  };
};
export const UseMapQuery = () => {
  const UseMapData = <T>(latingQuery: string, queryString: string, page: number) =>
    useQuery<T>(
      [MAP.MAP_STORE, latingQuery, queryString, page],
      () => getNearStoreAtMap(latingQuery, queryString, page),
      {
        staleTime: 6000,
        cacheTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: 0,
        onError: (err) => {
          console.log('err', err);
        },
      },
    );
  return { UseMapData };
};

export const UseReviewList = () => {
  // 메인에 위치한 실시간 리뷰

  const UseRecentReviewForMain = <T>(key: string, limit?: number) =>
    useQuery<T>([key], () => getRecentReviewList(limit), {
      staleTime: 6000,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 0,
    });
  const UseDetailReview = <T>(key: string, storeId: number, page?: number) =>
    useQuery<T>([key, storeId, page], () => getReviewList(storeId, page), {
      staleTime: 6000,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 0,
    });
  const UseDeleteDetailReview = (key: string, reviewId: number, refetch: any) =>
    useMutation(key, () => deleteReviewList(reviewId), {
      onSuccess: () => {
        refetch();
      },
    });
  return {
    UseRecentReviewForMain,
    UseDetailReview,
    UseDeleteDetailReview,
  };
};

export const UseFetchToken = () => {
  const setUserTokenState = useSetRecoilState(userToken);
  const localToken = getToken();
  const UseQueryToken = (pathname?: string) =>
    useQuery<TokenResponseType | void>([USER.TOKEN, pathname], () => tokenRefresh(), {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      refetchInterval: 1 * 60 * 1000, // 15분
      refetchIntervalInBackground: true,
      enabled: !!localToken,
      onSuccess: (data) => {
        if (!data) return;
        setUserTokenState(data.token);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  return { UseQueryToken };
};
export const UseUserQuery = (enabledState: boolean) => {
  const setUserInfoState = useSetRecoilState(userInfo);
  const UseGetUserInfo = () =>
    useQuery<any>([USER.INFO, enabledState], () => getUserInfo(enabledState), {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      enabled: enabledState,
      onSuccess: (data) => {
        if (data) {
          setUserInfoState(data);
        }
      },
    });
  return { UseGetUserInfo };
};
