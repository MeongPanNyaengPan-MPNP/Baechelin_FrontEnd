// TODO:

import React from 'react';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { useForm } from 'react-hook-form';
import { CheckBoxType } from '@interfaces/formTypes';
import RadioInputGroup from '@molecules/RadioInputGroup';
import { SnbQueryString } from '@recoil/mainSnbAtom';
import { useSetRecoilState } from 'recoil';
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
  const setRecoilSnbQuery = useSetRecoilState<string>(SnbQueryString);
  const { control, getValues } = useForm<FormValues>({ mode: 'onChange' });
  const setFilter = React.useCallback(() => {
    const curValues = getValues();
    const cateQueryString = curValues?.CategorySnb ? `&category=${curValues?.CategorySnb}` : '';
    const facilityCheckState = curValues?.FacilitySnb.filter((item) => !!item).map((value) => `&facility=${value}`);
    const resQuery = `${cateQueryString}${facilityCheckState.join('')}`;
    setRecoilSnbQuery(resQuery);
  }, [getValues, setRecoilSnbQuery]);

  return (
    <S.SnbWrap>
      <S.CategoryArea>
        <S.Container>
          <RadioInputGroup<FormValues> name="CategorySnb" changeEvent={setFilter} control={control} data={cateItems} />
        </S.Container>
      </S.CategoryArea>
      <S.FacilityArea>
        <S.Container>
          <CheckBoxGroup<FormValues>
            name="FacilitySnb"
            changeEvent={setFilter}
            control={control}
            data={facilityItems}
          />
        </S.Container>
      </S.FacilityArea>
    </S.SnbWrap>
  );
}

export default StoreCategorySnb;
