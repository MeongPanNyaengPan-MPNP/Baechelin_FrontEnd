import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import styled, { css } from 'styled-components';
import { CheckBoxType } from '@interfaces/formTypes';

export type StyledCheckBoxProps = {
  boxHidden?: boolean;
};
export type CheckBoxInputProps = {
  item: CheckBoxType;
  label?: string;
  [prop: string]: any;
} & CheckboxProps &
  UseControllerProps;

const CheckBoxItem = styled(Checkbox)`
  ${(props) => {
    if (props.hidden) {
      return css`
        visibility: hidden;
        width: 0;
        height: 0;
        position: absolute;
        left: -100000px;
      `;
    }
  }}; ;
`;
const CheckBoxArea = styled.div<StyledCheckBoxProps>`
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

function CheckBoxInput({
  name,
  item,
  number = 0,
  boxHidden = true,
  control,
}: CheckBoxInputProps & StyledCheckBoxProps) {
  return (
    <CheckBoxArea boxHidden={boxHidden}>
      <FormControlLabel
        label={item.label}
        hidden={boxHidden}
        control={
          <Controller
            name={`${name}.${number}.checked`}
            control={control}
            defaultValue={false}
            render={({ field }) => <CheckBoxItem {...field} hidden={boxHidden} />}
          />
        }
      />
    </CheckBoxArea>
  );
}

export default CheckBoxInput;
