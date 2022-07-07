import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Control, Controller, DeepMap, FieldError, FieldValue } from 'react-hook-form';

type TextInputProps = {
  name: string;
  control: Control<FieldValue<any>> | undefined;
  rules?: Omit<object, string>;
  errors?: DeepMap<any, FieldError>
} & TextFieldProps;

function TextInput({
                     name,
                     rules,
                     control,
                     errors,
                   }: TextInputProps) {
  return (
    <Controller control={control} name={name} defaultValue='' rules={rules} render={({ field: { onChange } }) => (
      <TextField
        onChange={onChange}
        error={errors && !!errors[name]}
        helperText={errors && errors[name] ? errors[name].message : ''}
      />
    )}
    />
  );
};

export default TextInput;
