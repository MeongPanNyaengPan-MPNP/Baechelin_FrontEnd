import React from 'react';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { useForm } from 'react-hook-form';
import RadioInputGroup from '@molecules/RadioInputGroup';
import { SnbQueryString, StoreFilterValues } from '@recoil/mainSnbAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { STORE_FILTERS } from '@constants/store';
import Icon from '@atoms/Icon';
import Buttons from '@atoms/Buttons';
import Span from '@atoms/Span';
import * as S from './styles';

export type FiltersType = typeof STORE_FILTERS;

export interface TopFixedSnbProps {
  filters: FiltersType;
}

export type FormValues = {
  CATEGORY: string;
  FACILITY: string[];
};

function StoreCategorySnb(props: TopFixedSnbProps) {
  const { filters } = props;

  const [prevSnbValues, setPrevSnbValues] = useRecoilState(StoreFilterValues);
  const setRecoilSnbQuery = useSetRecoilState<string>(SnbQueryString);
  const {
    control,
    getValues,
    reset
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: prevSnbValues,
  });

  // 쿼리스트링 만드는 함수
  const setQueryFilter = React.useCallback((curValues: FormValues) => {
    const cateQueryString = curValues?.CATEGORY ? `&category=${curValues?.CATEGORY}` : '';
    const facilityCheckState = curValues?.FACILITY.filter((item) => !!item).map((value) => `&facility=${value}`);
    return `${cateQueryString}${facilityCheckState.join('')}`;
  }, []);

  // 카테고리 누를 때마다 onchange 이벤트 호출
  const handleFormChange = React.useCallback(() => {
    const curValues = getValues();
    const query = setQueryFilter(curValues);
    setRecoilSnbQuery(query);
    const facilityItems = curValues?.FACILITY.map((item) => item);
    const setSnbRecoil = {
      CATEGORY: curValues.CATEGORY,
      FACILITY: facilityItems,
    };
    setPrevSnbValues(setSnbRecoil);
  }, [getValues, setPrevSnbValues, setQueryFilter, setRecoilSnbQuery]);

  // reset 버튼
  const handleReset = React.useCallback(() => {
    reset({
      CATEGORY: 'ALL',
      FACILITY: [''],
    });
    handleFormChange();
  }, [handleFormChange, reset]);
  return (
    <S.SnbWrap>
      <form onChange={handleFormChange}>
        <S.CategoryArea>
          <S.Container>
            <RadioInputGroup<FormValues>
              name="CATEGORY"
              control={control}
              data={filters.CATEGORY}
              curValue={prevSnbValues.CATEGORY}
            />
          </S.Container>
        </S.CategoryArea>
        <S.FacilityArea>
          <S.Container>
            <CheckBoxGroup<FormValues>
              name="FACILITY"
              control={control}
              data={filters.FACILITY}
              curValue={prevSnbValues.FACILITY}
            />
          </S.Container>

          <S.ResetButtonArea onClick={handleReset}>
            <Buttons round="100%" size="small">
              <Icon iconName="replay_icon" size="2.2rem" />
            </Buttons>

            <Span>초기화</Span>
          </S.ResetButtonArea>
        </S.FacilityArea>
      </form>
    </S.SnbWrap>
  );
}

export default StoreCategorySnb;
