import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Controller, DeepMap, FieldError, UseControllerProps } from 'react-hook-form';

type TextInputProps = {
  name: any;
  rules?: Omit<object, string>;
  errors?: DeepMap<any, FieldError>;
} & TextFieldProps &
  UseControllerProps;

function TextInput({ name, rules, control, errors }: TextInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={rules}
      render={({ field: { onChange } }) => (
        <TextField
          onChange={onChange}
          error={errors && !!errors[name]}
          helperText={errors && errors[name] ? errors[name].message : ''}
        />
      )}
    />
  );
}

export default TextInput;
