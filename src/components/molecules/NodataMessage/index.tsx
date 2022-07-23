import React from 'react';
import Span from '@atoms/Span';
import * as S from './styles';

function NoDataMessage({ message, buttonChildren }: { message?: Array<string>; buttonChildren?: any }) {
  return (
    <S.NoDataBox>
      <S.NodataImg />
      {message?.map((item) => (
        <Span display="block" textAlign="center" key={item} fontSize="2rem">
          {item}
        </Span>
      ))}
      {buttonChildren}
    </S.NoDataBox>
  );
}

export default NoDataMessage;
