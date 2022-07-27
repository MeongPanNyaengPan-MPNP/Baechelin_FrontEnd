/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { Color } from '@constants/styles';
import Icon from '@atoms/Icon';
import { InputAdornment } from '@mui/material';

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

  .MuiOutlinedInput-root {
    display: flex;
    align-items: center;
    padding: 0;
    height: 4.2rem;
    font-size: 15px;
    fieldset {
      border-color: ${Color.orange};
      border-radius: 0;
      border-width: 2px;
    }
    &:hover fieldset {
      border-color: ${Color.orange};
    }
  }
`;

function SearchInput({ width, margin, ...props }: SearchInputProps<any>) {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    navigate(`search/${data.inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledSearchInput
        freeSolo
        multiple={false}
        id="free-solo-2-demo"
        disableClearable
        // 자동검색
        options={[]}
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
                  endAdornment: (
                    <InputAdornment position="start">
                      <Icon iconName="search" size="2.2rem" color={Color.orange} />
                    </InputAdornment>
                  ),
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
