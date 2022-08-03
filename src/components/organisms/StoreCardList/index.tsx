import React, { useState } from 'react';
import StoreCard from '@molecules/StoreCard';
import Span from '@atoms/Span';
import { UseStoreListHooks } from '@hooks/UseQueryHooks';
import { useRecoilValue } from 'recoil';
import locationAtom from '@recoil/locationAtom';
import { SearchLocationQueryString, SnbQueryString } from '@recoil/mainSnbAtom';
import { StoreListQueryTypes } from '@interfaces/StoreResponseTypes';
import { STORE_LIST, STORE_TOPIC } from '@constants/index';
import { Pagination } from '@mui/material';
import { userInfo } from '@recoil/userAtom';
import NoDataMessage from '@molecules/NodataMessage';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import * as S from './styles';

type Keys = keyof typeof STORE_LIST;
export type StoreCardListProps = {
  title?: string;
  topic?: string;
  keyword?: string;
  size?: number;
};

function StoreCardList({ topic, title, keyword }: StoreCardListProps) {
  // const queryClient = useQueryClient();
  const { pathname } = useLocation();

  const queryClient = useQueryClient();
  const location = useRecoilValue(locationAtom);
  const SnbRecoilQuery = useRecoilValue(SnbQueryString);
  const SearchLocationQuery = useRecoilValue(SearchLocationQueryString);
  const { UseGetStoreList, UseGetSearchStoreList } = UseStoreListHooks<StoreListQueryTypes>(location);
  const [queryKey, setQueryKey] = React.useState<typeof STORE_LIST[Keys]>('');
  const [pageNum, setPageNum] = useState<number>(0);
  const userInfoValue = useRecoilValue(userInfo);
  React.useEffect(() => {
    if (topic === STORE_TOPIC.ARROUND) {
      setQueryKey(STORE_LIST.ARROUND_STORE);
    }
    if (topic === STORE_TOPIC.POINT) {
      setQueryKey(STORE_LIST.BEST_POINT_STORE);
    }
    if (topic === STORE_TOPIC.BOOKMARK) {
      setQueryKey(STORE_LIST.BEST_BOOKMARK_STORE);
    }
  }, [topic]);
  const {
    data: topicData,
    isSuccess: topicDataIsSuccess,
    remove: topicRemove,
    refetch: topicRefetch,
  } = UseGetStoreList(queryKey, SnbRecoilQuery, topic, pageNum);
  const {
    data: searchData,
    isSuccess: searchDataIsSuccess,
    refetch: searchRefetch,
    remove: searchRemove,
  } = UseGetSearchStoreList(STORE_LIST.SEARCH_STORE, SnbRecoilQuery, SearchLocationQuery, keyword, pageNum);
  // 검색일 경우 keyword 바뀌면 refetch
  console.log(searchRefetch, topicRefetch, pathname);
  React.useEffect(() => {
    searchRemove();
    topicRemove();
    queryClient.invalidateQueries(STORE_LIST.SEARCH_STORE);
    queryClient.invalidateQueries(queryKey);
  }, [queryClient, queryKey, searchRemove, topicRemove]);
  const pageChangeHandler = (pageNumber: number) => {
    setPageNum(pageNumber);
  };
  console.log('topicDataIsSuccess', !topicDataIsSuccess);
  React.useEffect(() => {
    console.log('effect');
  }, []);

  return (
    <>
      <h2>
        <>
          {topic === STORE_TOPIC.ARROUND &&
            (userInfoValue?.name ? (
              <Span fontSize="2.4rem" fontWeight="bold">
                <>
                  {userInfoValue?.name}님의 {title}
                </>
              </Span>
            ) : (
              <Span fontSize="2.4rem" fontWeight="bold">
                <>나의 {title}</>
              </Span>
            ))}
          {topic !== STORE_TOPIC.ARROUND && (
            <Span fontSize="2.4rem" fontWeight="bold">
              {title}
            </Span>
          )}
        </>
      </h2>
      <S.CardList col={4} spaceBetween={40}>
        {topicDataIsSuccess &&
          (topicData?.totalPage >= 0 ? (
            topicData?.cards?.map((cardItem) => (
              <S.CardItem key={cardItem.storeId}>
                <StoreCard {...cardItem} />
              </S.CardItem>
            ))
          ) : (
            <NoDataMessage message={['해당 카테고리 안에 가게가 없습니다.']} />
          ))}
        {searchDataIsSuccess &&
          (searchData?.totalPage >= 0 ? (
            searchData?.cards?.map((cardItem) => (
              <S.CardItem key={cardItem.storeId}>
                <StoreCard {...cardItem} />
              </S.CardItem>
            ))
          ) : (
            <NoDataMessage message={['검색 결과가 없습니다.', '다른 키워드로 검색해보세요!']} />
          ))}
      </S.CardList>
      {(topicData?.totalPage && topicData?.totalPage > -1) || (searchData?.totalPage && searchData?.totalPage > -1) ? (
        <S.PaginationArea>
          <Pagination
            count={Number(topicData?.totalPage) + 1 || Number(searchData?.totalPage) + 1}
            showFirstButton
            showLastButton
            size="medium"
            siblingCount={0}
            page={pageNum + 1}
            sx={{ fontSize: '2rem' }}
            boundaryCount={1}
            onChange={(e, page) => pageChangeHandler(page - 1)}
          />
        </S.PaginationArea>
      ) : null}
    </>
  );
}

export default StoreCardList;
