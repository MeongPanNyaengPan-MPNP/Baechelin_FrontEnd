import React from 'react';
import { Control, useController } from 'react-hook-form';
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import styled, { css } from 'styled-components';
import { CheckBoxType } from '@interfaces/formTypes';

export type StyledCheckBoxProps = {
  boxHidden?: boolean;
};
export type CheckBoxInputProps<T> = {
  item: CheckBoxType;
  label?: string;
  changeEvent?: any;
  control: Control<T>;
  name: any;
  [prop: string]: any;
} & CheckboxProps;

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

function CheckBoxInput<T>({
  item,
  boxHidden = true,
  control,
  changeEvent,
  name,
}: CheckBoxInputProps<T> & StyledCheckBoxProps) {
  const {field: { onChange },} = useController({
    control,
    name,
  });

  return (
    <CheckBoxArea boxHidden={boxHidden}>
      <FormControlLabel
        label={item.label}
        hidden={boxHidden}
        control={
          <CheckBoxItem
            onChange={(event, checked) => {
              onChange(checked ? item.label : checked);
              changeEvent?.();
            }}
          />
        }
      />
    </CheckBoxArea>
  );
}

export default CheckBoxInput;
