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
  margin-right: 15px;

  ${(props) => {
    if (props.boxHidden === true) {
      return css`
        .MuiButtonBase-root {
          visibility: hidden;
          width: 0;
          height: 0;
          position: absolute;
          left: -100000px;
        }

        .MuiFormControlLabel-root {
          margin: 0;

          .MuiFormControlLabel-label {
            padding: 8px 21px;
            background: #ed6f2a;
            border-radius: 5px;
            color: #fff;
            font-size: 1.3rem;
            font-weight: 500;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          .Mui-checked + .MuiFormControlLabel-label {
            background: #fff;
            color: #ed6f2a;
          }
        }
      `;
    }
  }}
`;
const CheckBoxItem = styled(Checkbox)`
  .MuiButtonBase-root {
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
    left: -100000px;
  }
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
        control={
          <CheckBoxItem
            onChange={(event, checked) => {
              onChange(checked ? item.key : checked);
              changeEvent?.();
            }}
          />
        }
      />
    </CheckBoxArea>
  );
}

export default CheckBoxInput;
