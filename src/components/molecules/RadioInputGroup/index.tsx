import React from 'react';
import { Control, useController, UseControllerProps } from 'react-hook-form';
import { CheckBoxType } from '@interfaces/formTypes';
import { FormControlLabel } from '@mui/material';
import RadioInput from '@atoms/RadioInput';
import * as S from './styles';

export type RadioGroupProps<T> = {
  boxHidden?: boolean;
  data?: CheckBoxType[];
  changeEvent?: any;
  control: Control<T>;
  name: string;
  curValue?: string;
  [prop: string]: any;
} & UseControllerProps<T>;

function Index<T>({ boxHidden, data, name, control, changeEvent, curValue = '' }: RadioGroupProps<T>) {
  const {field: { onChange },} = useController({
    control,
    name,
  });
  return (
    <S.RadioInputGroup defaultValue={curValue}>
      <div>
        {data?.map((item) => (
          <FormControlLabel
            key={item.label}
            label={item.label}
            control={
              <RadioInput
                boxhidden={boxHidden}
                value={item.label}
                onChange={(event, checked) => {
                  onChange(checked ? item.label : checked);
                  changeEvent?.();
                }}
              />
            }
          />
        ))}
      </div>
    </S.RadioInputGroup>
  );
}

export default Index;
