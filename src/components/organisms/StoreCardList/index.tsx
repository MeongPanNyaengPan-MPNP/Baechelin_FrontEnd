import React from 'react';
import StoreCard from '@molecules/StoreCard';
import Span from '@atoms/Span';
import { UseStoreListHooks } from '@hooks/UseQueryHooks';
import { useRecoilValue } from 'recoil';
import locationAtom from '@recoil/locationAtom';
import { SnbQueryString } from '@recoil/mainSnbAtom';
import { StoreListQueryTypes } from '@interfaces/StoreResponseTypes';
import { STORE_LIST, STORE_TOPIC } from '@constants/index';

import * as S from './styles';

type Keys = keyof typeof STORE_LIST;
export type StoreCardListProps = {
  title?: string;
  topic: string;
};

function StoreCardList({ topic, title }: StoreCardListProps) {
  const location = useRecoilValue(locationAtom);
  const SnbRecoilQuery = useRecoilValue(SnbQueryString);
  const { UseGetStoreList } = UseStoreListHooks<StoreListQueryTypes>(location);
  const [queryKey, setQueryKey] = React.useState<typeof STORE_LIST[Keys]>('');
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
  const { data } = UseGetStoreList(queryKey, SnbRecoilQuery, topic);
  return (
    <>
      <h2>
        <Span fontSize="2.4rem" fontWeight="bold">
          {title}
        </Span>
      </h2>
      <S.CardList col={4} spaceBetween={40}>
        {data?.cards?.map((cardItem) => (
          <S.CardItem key={cardItem.storeId}>
            <StoreCard {...cardItem} />
          </S.CardItem>
        ))}
      </S.CardList>
    </>
  );
}

export default StoreCardList;
