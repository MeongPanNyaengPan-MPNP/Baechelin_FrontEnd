import React from 'react';
import { useParams } from 'react-router-dom';

import SearchTemplate from '@templates/SearchTemplate';

import * as S from './styles';

function Search() {
  const { keyword } = useParams();
  return (
    <S.Container>
      <SearchTemplate keyword={keyword} />
    </S.Container>
  );
}

export default Search;
