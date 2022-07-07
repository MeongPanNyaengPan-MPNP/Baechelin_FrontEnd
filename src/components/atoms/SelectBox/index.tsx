import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import { Control, Controller, FieldValue } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export type SelectBoxProps = {
  name: string;
  label: string;
  control: Control<FieldValue<any>> | undefined;
  options: {
    value: string | ReadonlyArray<string> | number | undefined;
    label: string
  }[]
  sx?: SxProps<Theme>;
} & SelectProps

function SelectBox({
                     name,
                     label,
                     control,
                     options,
                     sx = { width: 150 },
                   }: SelectBoxProps) {
  return (
    <FormControl sx={sx}>
      <InputLabel id={label}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select labelId={label} label={label} id={name}{...field} autoWidth={false}>
            {
              options.map((item) => <MenuItem sx={sx} key={item.label} value={item.value}>
                {item.label}
              </MenuItem>)
            }
          </Select>
        )}
        name={name}
        control={control}
        defaultValue=''
      />
    </FormControl>
  );
}

export default SelectBox;
