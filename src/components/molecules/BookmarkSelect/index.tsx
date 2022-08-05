import React from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import Icon from '@atoms/Icon';
import { GetUserBookmarkFoldersResponse } from '@interfaces/BookmarkTypes';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

interface BookmarkSelectProps {
  selectedOption: any;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | number>>;
  BookmarkData: GetUserBookmarkFoldersResponse[] | undefined;
}

function BookmarkSelect({ selectedOption = 'all', setSelectedOption, BookmarkData }: BookmarkSelectProps) {
  // const [value, setValue] = useState('all');
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'all') {
      navigate(`/user/bookmark`);
    } else {
      navigate(`/user/bookmark/${event.target.value}`);
    }
  };
  return (
    <S.Container>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
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
          {BookmarkData?.map((v) => (
            <MenuItem value={v.id} key={v.id}>
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
