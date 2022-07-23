import { getBookmarkStoreList, getNearStore } from '@service/storeListApi';
import { useQuery } from 'react-query';
import { UserLoctaionType } from '@interfaces/LocationTypes';
import { getRecentReviewList } from '@service/reviewApi';
import { TokenResponseType, UserInfoType } from '@interfaces/TokenType';
import { getUserInfo, tokenRefresh } from '@service/getUserApi';
import { useSetRecoilState } from 'recoil';
import { userToken } from '@recoil/userAtom';
import { USER } from '@constants/useQueryKey';

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

export const UseFetchToken = () => {
  const setUserTokenState = useSetRecoilState(userToken);
  const UseQueryToken = (userInfoStateState: boolean) =>
    useQuery<TokenResponseType>([USER.TOKEN, userInfoStateState], () => tokenRefresh(), {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 2,
      refetchInterval: 1 * 60 * 1000, // 1분
      refetchIntervalInBackground: true,
      enabled: userInfoStateState,
      onSuccess: (data) => {
        console.log('userInfoStateState');
        console.log('onSuccess', userInfoStateState);
        setUserTokenState(data.access_token);
      },
      onError: (err) => {
        console.log('useQuery error', userInfoStateState, err);
        console.log(err);
        console.log('onError', userInfoStateState);
      },
    });
  return { UseQueryToken };
};
export const UseUserQuery = () => {
  // 메인에 위치한 실시간 리뷰
  const UseGetUserInfo = () => useQuery<UserInfoType>(USER.INFO, () => getUserInfo(), queryOption);
  return { UseGetUserInfo };
};
