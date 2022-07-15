import React, { useCallback } from 'react';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { useForm } from 'react-hook-form';
import { CheckBoxType } from '@interfaces/formTypes';
import RadioInputGroup from '@molecules/RadioInputGroup';
import Container from '@mui/material/Container';
import { useRecoilValue } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';
import { getNearStore } from '@service/storeListApi';
import locationAtom from '@recoil/locationAtom';
import * as S from './styles';

export interface TopFixedSnbProps {
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
}

export type FormValues = {
  CategorySnb: string;
  FacilitySnb: Array<boolean | string>;
};

function StoreCategorySnb(props: TopFixedSnbProps) {
  const { facilityItems, cateItems } = props;
  const UserLocationState = useRecoilValue(locationAtom);
  const queryClient = useQueryClient();
  const defaultValue = {
    CategorySnb: '',
    FacilitySnb: [false, false, false, false, false],
  };
  const { control, getValues } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: defaultValue,
  });
  const nearStoreMutation = useMutation((resQuery: string) => getNearStore(0, 12, UserLocationState, resQuery), {
    onSuccess: () => {
      queryClient.refetchQueries('nearStore');
    },
  });

  const setFilterData = useCallback(() => {
    const curValues = getValues();

    // queryString 만들기
    const cateQueryString = curValues?.CategorySnb ? `&category=${curValues?.CategorySnb}` : '';
    const facilityCheckState = curValues?.FacilitySnb.filter((item) => !!item).map((value) => `&facility=${value}`);
    const resQuery = `${cateQueryString}${facilityCheckState.join('')}`;
    nearStoreMutation.mutate(resQuery);
  }, [getValues, nearStoreMutation]);
  return (
    <S.SnbWrap>
      <S.CategoryArea>
        <Container maxWidth="lg">
          <RadioInputGroup<FormValues>
            name="CategorySnb"
            changeEvent={setFilterData}
            control={control}
            data={cateItems}
          />
        </Container>
      </S.CategoryArea>
      <S.FacilityArea>
        <Container>
          <CheckBoxGroup<FormValues>
            name="FacilitySnb"
            changeEvent={setFilterData}
            control={control}
            data={facilityItems}
          />
        </Container>
      </S.FacilityArea>
    </S.SnbWrap>
  );
}

export default StoreCategorySnb;
