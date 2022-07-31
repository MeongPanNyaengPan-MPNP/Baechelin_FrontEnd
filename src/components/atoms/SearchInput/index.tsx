/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { Color } from '@constants/styles';
import Icon from '@atoms/Icon';
import { InputAdornment } from '@mui/material';
import Buttons from '@atoms/Buttons';
import { useSetRecoilState } from 'recoil';
import modalAtom, { muiAnchorEl } from '@recoil/modalAtom';

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
    padding-left: 5px;

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
const SearchIcon = styled(Icon)`
  cursor: pointer;
  padding: 10px;
`;

function SearchInput({ width, margin, ...props }: SearchInputProps<any>) {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<IFormInput>();
  const setAnchorEl = useSetRecoilState(muiAnchorEl);
  const setModalContent = useSetRecoilState(modalAtom);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.inputValue === undefined || data.inputValue.length < 2) {
      handleDelete();
    } else {
      navigate(`search/${data.inputValue}`);
    }
  };
  const handleDelete = () => {
    setAnchorEl(null); // 헤더 팝업 닫기
    setModalContent({
      messages: ['검색어를 두 글자 이상 입력해주세요.'],
      submitButton: {
        point: true,
        show: true,
        onClick() {},
      },
      cancelButton: {
        show: false,
        onClick() {},
      },
    });
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
                      <Buttons size="xsmall" type="submit">
                        <SearchIcon iconName="search" size="2.2rem" color={Color.orange} />
                      </Buttons>
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
