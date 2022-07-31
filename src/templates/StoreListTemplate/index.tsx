import React from 'react';
import StoreCategorySnb, { FiltersType } from '@organisms/StoreCategorySnb';
import StoreCardList from '@organisms/StoreCardList';
import NoDataMessage from '@molecules/NodataMessage';
import SelectBox from '@atoms/SelectBox';
import { STORE_FILTERS } from '@constants/store';
import { useQuery } from 'react-query';
import { STORE_LIST } from '@constants/useQueryKey';
import { getSido } from '@service/storeListApi';
import { SidoResponseTypes } from '@interfaces/StoreResponseTypes';
import { useSetRecoilState } from 'recoil';
import { SearchLocationQueryString } from '@recoil/mainSnbAtom';
import * as S from './styles';

export interface StoreListTemplateProps {
  filters: FiltersType;
  topic?: string | undefined;
  title?: string;
  keyword?: string;
}

function StoreListTemplate({ filters, topic, title, keyword }: StoreListTemplateProps) {
  const [locationDep1, setLocationDep1] = React.useState<string | null>('전체');
  const [locationDep2, setLocationDep2] = React.useState<string | null>('');
  const [sidoQuery, setSidoQuery] = React.useState<string>('');
  const setSearchLocationQuery = useSetRecoilState(SearchLocationQueryString);
  const [sidoList, setSidoList] = React.useState([
    {
      LABEL: '',
      KEY: '',
    },
  ]);
  const { refetch } = useQuery<SidoResponseTypes>(
    [STORE_LIST.LOCATION_DEP_1, locationDep1],
    () => getSido(locationDep1 || ''),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        const res = data?.sigungu.map((item: string) => ({
          LABEL: item,
          KEY: item,
        }));
        res.unshift({
          LABEL: '전체',
          KEY: '전체',
        });
        if (locationDep1 === '전체') {
          setLocationDep2('');
        } else {
          setLocationDep2('전체');
        }
        setSidoList(res);
      },
    },
  );
  React.useEffect(() => {
    if (locationDep1 === '전체') {
      setSearchLocationQuery('');
      setSidoQuery('');
      setLocationDep2('');
    } else {
      const query = `&sido=${locationDep1}`;
      setSearchLocationQuery(query);
      setSidoQuery(query);
    }
    refetch();
  }, [locationDep1, refetch, setSearchLocationQuery]);
  React.useEffect(() => {
    const sigunguQuery = locationDep2 === '전체' ? '' : `&sigungu=${locationDep2}`;
    const query = `${sigunguQuery}`;
    setSearchLocationQuery(`${sidoQuery}${query}`);
  }, [locationDep2, refetch, setSearchLocationQuery, sidoQuery]);
  return (
    <S.Wrapper>
      <section>
        <StoreCategorySnb filters={filters} />
        {!topic && (
          <S.Container>
            <S.SelectGroup>
              <SelectBox value={locationDep1} set={setLocationDep1} label="시/도" data={STORE_FILTERS.LOCATION_1} />
              <SelectBox value={locationDep2} set={setLocationDep2} label="" data={sidoList} />
            </S.SelectGroup>
          </S.Container>
        )}
      </section>
      <S.Container>
        <S.CardGroup>
          <StoreCardList topic={topic} keyword={keyword} title={title} />
          {!topic && !keyword && <NoDataMessage message={['잘못된 접근입니다']} />}
        </S.CardGroup>
      </S.Container>
    </S.Wrapper>
  );
}

export default StoreListTemplate;
