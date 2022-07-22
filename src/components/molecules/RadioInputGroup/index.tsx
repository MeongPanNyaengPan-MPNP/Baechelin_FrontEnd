/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Control, useController, UseControllerProps } from 'react-hook-form';
import { CheckBoxType } from '@interfaces/formTypes';
import { FormControlLabel } from '@mui/material';
import RadioInput from '@atoms/RadioInput';
import * as S from './styles';

export type RadioGroupProps<T> = {
  boxHidden?: boolean;
  data?: CheckBoxType[];
  control: Control<T>;
  name: string;
  [prop: string]: any;
} & UseControllerProps<T>;

function Index<T>({ boxHidden, data, name, control, curValue = '' }: RadioGroupProps<T>) {
  const {field: { onChange, ...restField },} = useController({
    control,
    name,
  });

  return (
    <S.RadioInputGroup defaultValue={curValue || ''} value={curValue}>
      <div>
        {data?.map((item) => (
          <FormControlLabel
            {...restField}
            key={item.LABEL}
            label={item.LABEL}
            value={item.KEY || ''}
            control={<RadioInput boxhidden={boxHidden} value={item.KEY ? item.KEY : ''} onChange={onChange} />}
          />
        ))}
      </div>
    </S.RadioInputGroup>
  );
}

export default Index;
