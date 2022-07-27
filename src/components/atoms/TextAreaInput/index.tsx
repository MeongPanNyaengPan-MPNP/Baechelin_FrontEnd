import React from 'react';
import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import { Controller, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components';
import { FormErrMessage } from '@styles/ui';

export type TextAreaInputProps = TextareaAutosizeProps & UseControllerProps;

const TextAreaBox = styled.div`
  width: 100%;
`;

function TextAreaInput({ control, name }: TextAreaInputProps) {
  return (
    <TextAreaBox>
      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="방문하신 장소에 가는 길에 대한 노하우를 남겨 주시면 더욱 큰 도움이 됩니다."
              style={{
                width: '100%',
                border: '1px solid #efefef',
                padding: '20px',
                background: '#F2F2F2',
                minHeight: '250px',
                fontSize: '1.8rem',
              }}
              {...field}
            />
            {fieldState.error && <FormErrMessage>{fieldState.error?.message}</FormErrMessage>}
          </>
        )}
      />
    </TextAreaBox>
  );
}

export default TextAreaInput;
