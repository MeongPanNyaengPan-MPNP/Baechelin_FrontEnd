import React from 'react';
import { FormGroup, FormHelperText } from '@mui/material';
import { DeepMap, FieldError, UseControllerProps } from 'react-hook-form';
import CheckBoxInput from '@atoms/CheckBoxInput';
import { CheckBoxType } from '@interfaces/formTypes';

type CheckBoxFormProps = {
  boxHidden?: boolean;
  data?: CheckBoxType[];
  errors?: DeepMap<any, FieldError>;
  [prop: string]: any;
} & UseControllerProps;

function CheckBoxForm({ boxHidden = false, data, name, control, errors }: CheckBoxFormProps) {
  return (
    <FormGroup>
      {data?.map((item, index) => (
        <CheckBoxInput
          item={item}
          key={item.label}
          number={index}
          xHidden={boxHidden}
          name={name}
          control={control}
          errors={errors}
        />
      ))}
      <FormHelperText>{errors?.checkbox?.message}</FormHelperText>
    </FormGroup>
  );
}

export default CheckBoxForm;
