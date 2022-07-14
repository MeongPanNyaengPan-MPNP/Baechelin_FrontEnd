import React from 'react';
import { FormHelperText } from '@mui/material';
import { Control, DeepMap, FieldError, UseControllerProps } from 'react-hook-form';
import CheckBoxInput from '@atoms/CheckBoxInput';
import { CheckBoxType } from '@interfaces/formTypes';
import * as S from './styles';

export type CheckBoxGroupProps<T> = {
  boxHidden?: boolean;
  data?: CheckBoxType[];
  prevValue?: any;
  errors?: DeepMap<any, FieldError>;
  changeEvent?: any;
  control: Control<T>;
  name: string;
} & UseControllerProps<T>;

function CheckBoxGroup<T>({
  boxHidden = false,
  data,
  errors,
  changeEvent,
  control,
  name,
  prevValue,
}: CheckBoxGroupProps<T>) {
  return (
    <S.CheckBoxGroup>
      {data?.map((item, index) => (
        <CheckBoxInput<T>
          item={item}
          key={item.label}
          number={index}
          boxHidden={boxHidden}
          prevValue={prevValue}
          name={`${name}.${index}`}
          control={control}
          errors={errors}
          changeEvent={changeEvent}
        />
      ))}
      <FormHelperText>{errors?.checkbox?.message}</FormHelperText>
    </S.CheckBoxGroup>
  );
}

export default CheckBoxGroup;
