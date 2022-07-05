import React from 'react';
import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import { Control, Controller, FieldValue } from 'react-hook-form';
import styled from 'styled-components';

export type TextAreaInputProps = {
  name: string;
  control: Control<FieldValue<any>> | undefined;
} & TextareaAutosizeProps

const TextAreaBox = styled.div`
  width: 100%;
`;

function TextAreaInput({
                         control,
                         name,
                       }: TextAreaInputProps) {
  return (
    <TextAreaBox>
      <Controller
        render={({ field }) => (
          <TextareaAutosize
            aria-label='empty textarea'
            placeholder='Empty'
            style={{
              width: '100%',
              border: '1px solid #efefef',
            }}
            {...field}
          />
        )}
        control={control}
        defaultValue=''
        name={name}
      />

    </TextAreaBox>
  );
}

export default TextAreaInput;
