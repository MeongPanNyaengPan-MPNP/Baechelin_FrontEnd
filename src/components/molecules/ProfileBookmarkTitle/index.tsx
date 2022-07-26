import React from 'react';

import Span from '@atoms/Span';

import * as S from './styles';

interface ProfileBookmarkTitleProps {
  name: string;
  email: string;
}

function ProfileBookmarkTitle({ name, email }: ProfileBookmarkTitleProps) {
  const onClickLogout = () => {
    alert('로그아웃');
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Span fontSize="1.4rem" fontWeight="700" className="nameSpan">
          {name}
        </Span>
        <Span>{email}</Span>
      </S.Wrapper>
      <Span onClick={onClickLogout} styles={{ cursor: 'pointer' }}>
        로그아웃
      </Span>
    </S.Container>
  );
}

export default ProfileBookmarkTitle;
