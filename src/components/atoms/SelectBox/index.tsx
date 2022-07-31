import React from 'react';
import { FormControl, MenuItem, Select, SelectProps } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const SelectConatiner = styled.div`
  display: inline-block;
  position: relative;
  font-size: 2rem;
  margin-right: 20px;

  .MuiInputBase-formControl {
    background: #fff;
  }

  .MuiSelect-select {
    font-size: 1.4rem;
    min-height: 0;
  }

  .MuiButtonBase-root {
    font-size: 1.4rem;
  }
`;

export type SelectBoxProps = {
  label: string;
  data: any[] | null;
  value?: string | null;
  set: React.Dispatch<React.SetStateAction<any | any>>;
} & SelectProps;

function SelectBox({ value, set, label, data }: SelectBoxProps) {
  return (
    <SelectConatiner>
      <FormControl
        sx={{
          fontSize: '1.4rem',
          width: 150,
        }}
      >
        <Select
          disabled={value === ''}
          labelId={label}
          autoWidth={false}
          value={value || ''}
          onChange={(event) => {
            set(event.target.value);
          }}
        >
          {data?.map((item) => (
            <MenuItem
              sx={{
                fontSize: '1.4rem',
                width: 150,
                padding: '8px 15px',
              }}
              key={item.LABEL}
              value={item.KEY}
            >
              {item.LABEL}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectConatiner>
  );
}

export default SelectBox;
