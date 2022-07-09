/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export interface SearchInputProps<OptionType> {
  disableCloseOnSelect?: boolean;
  autoComplete?: boolean;
  autoHighlight?: boolean;
  value?: OptionType[];
  width?: string;
  margin?: string;
  getOptionLabel?: (option: OptionType) => string;
  onChange?: (event: object, value: OptionType | OptionType[] | null, reason: string) => void;
}

interface IFormInput {
  inputValue: string;
}

const StyledSearchInput = styled(Autocomplete)`
  width: ${(props: SearchInputProps<any>) => props.width || '200px'};
  margin: ${(props: SearchInputProps<any>) => props.margin || null};
`;

function SearchInput({ width, margin, ...props }: SearchInputProps<any>) {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledSearchInput
        freeSolo
        multiple={false}
        id="free-solo-2-demo"
        disableClearable
        options={['option']}
        renderInput={(params) => (
          <Controller
            name="inputValue"
            control={control}
            render={({ field }) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
                {...field}
              />
            )}
          />
        )}
        width={width}
        margin={margin}
        {...props}
      />
    </form>
  );
}

export default SearchInput;
