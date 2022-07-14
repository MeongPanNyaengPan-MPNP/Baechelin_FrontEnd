import React from 'react';
import { CheckboxProps } from '@mui/material';
import styled, { css } from 'styled-components';
import Radio from '@mui/material/Radio';

export type StyledRadioProps = {
  boxHidden?: boolean;
};
export type RadioInputProps = {
  [prop: string]: any;
} & CheckboxProps;

const RadioItem = styled(Radio)<StyledRadioProps>`
  display: inline-block;
  margin: 0 10px;
  ${(props) => {
    if (props.boxHidden === true) {
      return css`
        .MuiFormControlLabel-root {
          margin: 0;

          .MuiFormControlLabel-label {
            padding: 7px 16px;
            background: #efefef;
          }

          .Mui-checked + .MuiFormControlLabel-label {
            background: #999;
            color: #fff;
          }
        }
      `;
    }
  }}
`;

function RadioInput({ ...props }: RadioInputProps) {
  return <RadioItem {...props} />;
}

export default RadioInput;
