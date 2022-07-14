import React from 'react';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { useForm } from 'react-hook-form';
import { CheckBoxType } from '@interfaces/formTypes';
import RadioInputGroup from '@molecules/RadioInputGroup';
import Container from '@mui/material/Container';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SnbGetValues, SnbQueryString } from '@recoil/mainSnbAtom';
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
  const setSnbQueryString = useSetRecoilState(SnbQueryString);
  const [snbValues, setSnbValues] = useRecoilState(SnbGetValues);
  const defaultValue = {
    CategorySnb: 'cate3',
    FacilitySnb: [false, false, false, 'facility4', false],
  };
  const { control, getValues } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: defaultValue,
  });

  const setFilter = () => {
    const curValues = getValues();
    console.log('curValues', curValues);
    console.log('snbValues', snbValues);
    const atom = {
      CategorySnb: curValues.CategorySnb,
      FacilitySnb: curValues.FacilitySnb.map((item) => item),
    };
    // queryString 만들기
    const cateQueryString = `${curValues?.CategorySnb}`;
    const facilityCheckState = curValues?.FacilitySnb.filter((item) => !!item).map((value) => `&facility=${value}`);
    const res = `?category=${cateQueryString}${facilityCheckState.join('')}`;
    // recoil에 저장
    setSnbQueryString(res);
    setSnbValues(atom);
  };
  return (
    <S.SnbWrap>
      <S.CategoryArea>
        <Container maxWidth="lg">
          <RadioInputGroup<FormValues>
            curValue={snbValues.CategorySnb}
            name="CategorySnb"
            changeEvent={setFilter}
            control={control}
            data={cateItems}
          />
        </Container>
      </S.CategoryArea>
      <S.FacilityArea>
        <Container>
          <CheckBoxGroup<FormValues>
            name="FacilitySnb"
            changeEvent={setFilter}
            control={control}
            data={facilityItems}
          />
        </Container>
      </S.FacilityArea>
    </S.SnbWrap>
  );
}

export default StoreCategorySnb;
