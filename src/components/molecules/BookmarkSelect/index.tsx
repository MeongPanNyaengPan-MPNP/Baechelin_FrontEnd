import React, { useState } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import Icon from '@atoms/Icon';
import * as S from './styles';

interface BookmarkSelectProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

function BookmarkSelect({ setSelectedOption }: BookmarkSelectProps) {
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
          <MenuItem value={20}>
            <Icon iconName="folder" margin="0 0.5rem 0 0" />1
          </MenuItem>
          <MenuItem value={30}>
            <Icon iconName="folder" margin="0 0.5rem 0 0" />2
          </MenuItem>
        </Select>
      </FormControl>
    </S.Container>
  );
}

export default BookmarkSelect;
