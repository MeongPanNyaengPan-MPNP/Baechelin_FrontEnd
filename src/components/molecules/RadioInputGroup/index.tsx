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
            key={item.LABEL}
            label={item.LABEL}
            control={
              <RadioInput
                boxhidden={boxHidden}
                value={item.LABEL}
                onChange={(event, checked) => {
                  onChange(checked ? item.KEY : checked);
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
