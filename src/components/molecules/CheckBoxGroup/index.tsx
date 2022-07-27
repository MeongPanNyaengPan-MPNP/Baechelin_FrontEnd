import React from 'react';
import { FormHelperText } from '@mui/material';
import { Control, DeepMap, FieldError, UseControllerProps } from 'react-hook-form';
import CheckBoxInput, { StyledCheckBoxProps } from '@atoms/CheckBoxInput';
import { CheckBoxType } from '@interfaces/formTypes';
import * as S from './styles';

export type CheckBoxGroupProps<T> = {
  boxHidden?: boolean;
  data?: CheckBoxType[];
  curValue?: (string | undefined)[];
  errors?: DeepMap<any, FieldError>;
  changeEvent?: any;
  control: Control<T>;
  name: string;
  boxGroupSyleProps?: StyledCheckBoxProps;
  boxStyleProps?: StyledCheckBoxProps;
} & UseControllerProps<T>;

function CheckBoxGroup<T>({
  data,
  errors,
  changeEvent,
  control,
  name,
  curValue = [''],
  boxGroupSyleProps,
  boxStyleProps,
}: CheckBoxGroupProps<T>) {
  return (
    <S.CheckBoxGroup {...boxGroupSyleProps}>
      {data?.map((item, index) => (
        <CheckBoxInput<T>
          item={item}
          key={item.LABEL}
          number={index}
          curValue={curValue[index]}
          name={`${name}.${index}`}
          control={control}
          errors={errors}
          changeEvent={changeEvent}
          {...boxStyleProps}
        />
      ))}
      <FormHelperText>{errors?.checkbox?.message}</FormHelperText>
    </S.CheckBoxGroup>
  );
}

export default CheckBoxGroup;
