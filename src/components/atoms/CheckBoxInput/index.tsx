import React from 'react';
import { Control, useController } from 'react-hook-form';
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import styled, { css } from 'styled-components';
import { CheckBoxType } from '@interfaces/formTypes';

export type StyledCheckBoxProps = {
  boxHidden?: boolean;
  padding?: string;
  width?: string;
  margin?: string;
  basicBg?: string;
  basicColor?: string;
  round?: string;
  checkedBg?: string;
  checkedColor?: string;

  [prop: string]: any;
};
export type CheckBoxInputProps<T> = {
  item: CheckBoxType;
  control: Control<T>;
  name: any;
  curValue?: string;
} & CheckboxProps;

const CheckBoxArea = styled.div<StyledCheckBoxProps>`
  display: inline-block;
  margin-right: 15px;

  ${(props) => {
    if (props.boxHidden === true) {
      return css`
        width: ${props.grid || `auto`};
        margin: ${props.margin};
        padding: ${props.paddingBetween};
        box-sizing: border-box;
        text-align: ${props.textAlign};

        .MuiButtonBase-root {
          visibility: hidden;
          width: 0;
          height: 0;
          position: absolute;
          left: -100000px;
        }

        .MuiFormControlLabel-root {
          margin: 0;

          width: ${props.width || `auto`};

          .MuiFormControlLabel-label {
            padding: ${props.padding || `8px 21px`};
            border-radius: ${props.round || `5px`};
            background: ${props.basicBg || `#ed6f2a`};
            color: ${props.basicColor || `#fff`};
            font-size: ${props.fontSize || `1.3rem`};
            font-weight: 500;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          .Mui-checked + .MuiFormControlLabel-label {
            background: ${props.checkedBg || `#fff`};
            color: ${props.checkedColor || `#ed6f2a`};
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
  ...restProps
}: CheckBoxInputProps<T> & StyledCheckBoxProps) {
  const {field: { onChange, ...restField },} = useController({
    control,
    name,
  });
  return (
    <CheckBoxArea boxHidden={boxHidden} {...restProps}>
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
