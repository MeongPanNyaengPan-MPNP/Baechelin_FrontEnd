import React from 'react';
import { FormGroup, FormHelperText } from '@mui/material';
import CheckBoxInput, { StyledCheckBoxProps } from '@atoms/CheckBoxInput';
import { Control, DeepMap, FieldError, FieldValue } from 'react-hook-form';

type CheckBoxFormProps = {
  checkBoxItems: { name: string, text: string }[];
  control: Control<FieldValue<any>> | undefined;
  errors?: DeepMap<any, FieldError>
  [prop: string]: any;
} & StyledCheckBoxProps

function CheckBoxForm({
                        errors,
                        checkBoxItems,
                        control,
                        boxHidden,
                      }: CheckBoxFormProps) {
  return (
    <FormGroup>
      {
        checkBoxItems.map((item) => (
          <CheckBoxInput name={item.name} key={item.name} boxHidden={boxHidden}
                         text={item.text} control={control} errors={errors} />
        ))
      }
      <FormHelperText>{errors?.checkbox?.message}</FormHelperText>
    </FormGroup>
  );
}

export default CheckBoxForm;
