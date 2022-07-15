import React from 'react';
import { CheckboxProps } from '@mui/material';
import styled from 'styled-components';
import Radio from '@mui/material/Radio';

export type StyledRadioProps = {
  boxhidden?: boolean;
};
export type RadioInputProps = {
  [prop: string]: any;
} & CheckboxProps;

const RadioItem = styled(Radio)<StyledRadioProps>`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.6rem;
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
  left: -100000px;

  & + .MuiFormControlLabel-label {
    padding: 10px 20px;
    font-size: 1.6rem;
  }

  &.Mui-checked + .MuiFormControlLabel-label {
    font-weight: bold;
  }
`;

function RadioInput({ ...props }: RadioInputProps) {
  return <RadioItem {...props} />;
}

export default RadioInput;
