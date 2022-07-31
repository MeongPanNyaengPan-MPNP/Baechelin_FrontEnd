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
  const { data: topicData, isSuccess: topicDataIsSuccess } = UseGetStoreList(queryKey, SnbRecoilQuery, topic, pageNum);
  const {
    data: searchData,
    isSuccess: searchDataIsSuccess,
    refetch: searchRefetch,
  } = UseGetSearchStoreList(STORE_LIST.SEARCH_STORE, SnbRecoilQuery, SearchLocationQuery, keyword, pageNum);

  React.useEffect(() => {
    searchRefetch();
    queryClient.invalidateQueries(STORE_LIST.SEARCH_STORE);
  }, [queryClient, keyword, searchRefetch, SnbRecoilQuery]);
  const pageChangeHandler = (pageNumber = 1) => {
    setPageNum(pageNumber);
  };
  return (
    <>
      <h2>
        <Span fontSize="2.4rem" fontWeight="bold">
          <>
            {topic === STORE_TOPIC.ARROUND && userInfoValue?.name}
            {title}
          </>
        </Span>
      </h2>
      <S.CardList col={4} spaceBetween={40}>
        {topicDataIsSuccess &&
          topicData?.cards?.map((cardItem) => (
            <S.CardItem key={cardItem.storeId}>
              <StoreCard {...cardItem} />
            </S.CardItem>
          ))}
        {searchDataIsSuccess &&
          searchData?.cards?.map((cardItem) => (
            <S.CardItem key={cardItem.storeId}>
              <StoreCard {...cardItem} />
            </S.CardItem>
          ))}
      </S.CardList>{' '}
      <S.PaginationArea>
        <Pagination
          count={topicData?.totalPage || searchData?.totalPage}
          showFirstButton
          showLastButton
          size="medium"
          siblingCount={0}
          sx={{ fontSize: '2rem' }}
          boundaryCount={1}
          onChange={(e, page) => pageChangeHandler(page)}
        />
      </S.PaginationArea>
    </>
  );
}

export default StoreCardList;
