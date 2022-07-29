import React, { useState } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import Icon from '@atoms/Icon';
import { GetUserBookmarkFoldersResponse } from '@interfaces/BookmarkTypes';
import * as S from './styles';

interface BookmarkSelectProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  BookmarkData: GetUserBookmarkFoldersResponse[] | undefined;
}

function BookmarkSelect({ setSelectedOption, BookmarkData }: BookmarkSelectProps) {
  const [value, setValue] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <S.Container>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          displayEmpty
          onChange={handleChange}
          variant="standard"
          disableUnderline
          IconComponent={KeyboardArrowDown}
        >
          <MenuItem value="all">
            <Icon iconName="folder" margin="0 0.5rem 0 0" />
            전체보기
          </MenuItem>
          {BookmarkData?.map((v, i) => (
            <MenuItem value={i}>
              <Icon iconName="folder" margin="0 0.5rem 0 0" />
              {v.folderName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.Container>
  );
}

export default BookmarkSelect;
