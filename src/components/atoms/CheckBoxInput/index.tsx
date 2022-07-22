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
  control: Control<T>;
  name: any;
  curValue?: string;
  // curValues?: [];
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
  name,
  curValue,
}: CheckBoxInputProps<T> & StyledCheckBoxProps) {
  const {field: { onChange, ...restField },} = useController({
    control,
    name,
  });
  return (
    <CheckBoxArea boxHidden={boxHidden}>
      <FormControlLabel
        {...restField}
        label={item.LABEL}
        control={
          <CheckBoxItem
            value={item.KEY}
            checked={curValue === item.KEY}
            onChange={(event, checked) => {
              onChange(checked ? event.target.value : '');
            }}
          />
        }
      />
    </CheckBoxArea>
  );
}

export default CheckBoxInput;
