import React, { ReactNode } from 'react';
import NoDataMessage from '@molecules/NodataMessage';
import { UseStoreListHooks } from '@hooks/UseQueryHooks';
import { StoreListQueryTypes, StoreResponseTypes } from '@interfaces/StoreResponseTypes';
import CardGroupSlide, { CardGroupSlideProps } from '@organisms/CardGroupSlide';
import { useRecoilValue } from 'recoil';
import { SnbQueryString } from '@recoil/mainSnbAtom';
import locationAtom from '@recoil/locationAtom';
import { STORE_TOPIC } from '@constants/store';
import SkeletonGroup from '@molecules/SkeletonGroup';
import * as S from './styles';

type MainSlideListProps = {
  children?: ReactNode;
  queryKey: string;
  listTopic: string;
  hiddenNoLocationState?: boolean;
};

function MainSlideSection({
  children,
  queryKey,
  listTopic,
  hiddenNoLocationState = false,
  ...slideProps
}: MainSlideListProps & CardGroupSlideProps<StoreResponseTypes>) {
  const location = useRecoilValue(locationAtom);
  //   const defaultLocation = '&lat=37.55328547489251&lng=126.97260152154756 ';
  const SnbRecoilQuery = useRecoilValue(SnbQueryString);
  const { UseGetStoreList, UseGetBookmarkStoreList } = UseStoreListHooks<StoreListQueryTypes>(location);

  const { data, isSuccess, isError, isLoading } =
    listTopic === STORE_TOPIC.BOOKMARK
      ? UseGetBookmarkStoreList(queryKey, SnbRecoilQuery)
      : UseGetStoreList(queryKey, SnbRecoilQuery, listTopic);
  // console.log('section', queryKey, SnbRecoilQuery, isSuccess, isLoading);

  return (
    <S.MainStoreListSection>
      {hiddenNoLocationState && location == null ? (
        <NoDataMessage
          message={['사용자의 위치정보가 없습니다.', '위치정보를 동의하시면 내 주변의 맛집을 찾을 수 있습니다.']}
        />
      ) : (
        <>
          {children}
          {/* 데이터 정상노출 */}
          {isSuccess && data.cards && data.cards.length > 0 && (
            <CardGroupSlide cardItems={data?.cards} isLoading={!isSuccess} {...slideProps} />
          )}
          {/* No length */}
          {isSuccess && data.cards && data.cards.length === 0 && <NoDataMessage message={['주변 가게가 없습니다']} />}
          {/* Loading */}
          {isLoading && <SkeletonGroup col={4} width={`${100 / 4} - 40px`} />}
          {/* isError */}
          {isError && <NoDataMessage message={['isError']} />}
        </>
      )}
    </S.MainStoreListSection>
  );
}

export default MainSlideSection;
