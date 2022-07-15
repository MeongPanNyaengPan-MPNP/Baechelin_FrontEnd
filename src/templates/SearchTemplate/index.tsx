import React from 'react';
import * as S from './styles';

interface SearchTemplateProps {
  keyword: string | undefined;
}

function SearchTemplate({ keyword }: SearchTemplateProps) {
  return (
    <S.Container>
      <div>search</div>
      검색어 : {keyword}
    </S.Container>
  );
}

export default SearchTemplate;
