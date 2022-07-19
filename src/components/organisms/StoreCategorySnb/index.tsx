import React from 'react';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { useForm } from 'react-hook-form';
import { CheckBoxType } from '@interfaces/formTypes';
import RadioInputGroup from '@molecules/RadioInputGroup';
import Container from '@mui/material/Container';
import { useSetRecoilState } from 'recoil';
import { SnbQueryString } from '@recoil/mainSnbAtom';
import * as S from './styles';

export interface TopFixedSnbProps {
  cateItems: CheckBoxType[];
  facilityItems: CheckBoxType[];
  refetch: any;
}

export type FormValues = {
  CategorySnb: string;
  FacilitySnb: Array<boolean | string>;
};

function StoreCategorySnb(props: TopFixedSnbProps) {
  const { facilityItems, cateItems, refetch } = props;
  const setRecoilSnbQuery = useSetRecoilState<string>(SnbQueryString);
  //  const [resQueryState, setResQueryState] = useState<string>('');
  const defaultValue = {
    CategorySnb: '',
    FacilitySnb: [false, false, false, false, false],
  };
  const { control, getValues } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: defaultValue,
  });
  const setFilter = () => {
    const curValues = getValues();
    const cateQueryString = curValues?.CategorySnb ? `&category=${curValues?.CategorySnb}` : '';
    const facilityCheckState = curValues?.FacilitySnb.filter((item) => !!item).map((value) => `&facility=${value}`);
    const resQuery = `${cateQueryString}${facilityCheckState.join('')}`;
    setRecoilSnbQuery(resQuery);
    refetch();
  };
  return (
    <S.SnbWrap>
      <S.CategoryArea>
        <Container maxWidth="lg">
          <RadioInputGroup<FormValues> name="CategorySnb" changeEvent={setFilter} control={control} data={cateItems} />
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
