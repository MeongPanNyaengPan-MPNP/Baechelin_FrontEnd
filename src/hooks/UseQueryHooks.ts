import { getBookmarkStoreList, getNearStore, getNearStoreAtMap, getSearchStore } from '@service/storeListApi';
import { useMutation, useQuery } from 'react-query';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { deleteReviewList, getRecentReviewList, getReviewList } from '@service/reviewApi';
import { TokenResponseType } from '@interfaces/TokenType';
import { getUserInfo, tokenRefresh } from '@service/getUserApi';
import { useSetRecoilState } from 'recoil';
import { userInfo, userToken } from '@recoil/userAtom';
import { MAP, USER } from '@constants/useQueryKey';
import { UserInfoType } from '@interfaces/UserInfoType';

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
  const UseDeleteDetailReview = (key: string, reviewId: number) => useMutation(key, () => deleteReviewList(reviewId));
  return {
    UseRecentReviewForMain,
    UseDetailReview,
    UseDeleteDetailReview,
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
      refetchInterval: 15 * 60 * 1000, // 1분
      refetchIntervalInBackground: true,
      enabled: loginState,
      onSuccess: (data) => {
        setUserTokenState(data.token);
      },
      onError: (err) => {
        console.log('get Token ERROR', err);
        console.log(err);
      },
    });
  return { UseQueryToken };
};
export const UseUserQuery = () => {
  const setUserInfoState = useSetRecoilState(userInfo);
  const UseGetUserInfo = <T extends Partial<UserInfoType>>(token?: string | null) =>
    useQuery<T & UserInfoType>([USER.INFO, token], () => getUserInfo(token), {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setUserInfoState(data);
      },
    });
  return { UseGetUserInfo };
};
