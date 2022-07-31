import React from 'react';
import { useParams } from 'react-router-dom';

import StoreListTemplate from '@templates/StoreListTemplate';
import { STORE_FILTERS } from '@constants/store';
import * as S from './styles';

function Search() {
  const { keyword } = useParams();
  return (
    <S.Container>
      <StoreListTemplate keyword={keyword} filters={STORE_FILTERS} />;
    </S.Container>
  );
}

export default Search;
