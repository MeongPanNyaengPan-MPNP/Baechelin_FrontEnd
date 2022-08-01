import React from 'react';
import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import { Controller, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components';
import { FormErrMessage } from '@styles/ui';
import FormLength from '@atoms/FormLength';

export type TextAreaInputProps = TextareaAutosizeProps & UseControllerProps & { length: number; max: number };

const TextAreaBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 40px;

  .form_length {
    margin-top: 10px;

    & + p {
      margin-top: -2.5rem;
    }
  }

  textarea {
    height: 250px !important;
  }
`;

function TextAreaInput({ control, name, length, max }: TextAreaInputProps) {
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
                fontSize: '1.6rem',
              }}
              {...field}
            />

            <FormLength length={length} max={max} />
            {fieldState.error && <FormErrMessage>{fieldState.error?.message}</FormErrMessage>}
          </>
        )}
      />
    </TextAreaBox>
  );
}

export default TextAreaInput;
