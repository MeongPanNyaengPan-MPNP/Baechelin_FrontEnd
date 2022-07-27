import React, { useState } from 'react';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import * as S from './styles';

// interface BookmarkTemplateProps {

// }

function BookmarkSelect() {
  const [age, setAge] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    console.log(event.target.value);
  };

  return (
    <S.Container>
      <Box sx={{ width: 290, height: 42, backgroundColor: 'white' }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            displayEmpty
            onChange={handleChange}
            inputProps={{ style: { fontSize: 20 } }}
          >
            <MenuItem value="all">전체보기</MenuItem>
            <MenuItem value={20}>1</MenuItem>
            <MenuItem value={30}>2</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </S.Container>
  );
}

export default BookmarkSelect;
