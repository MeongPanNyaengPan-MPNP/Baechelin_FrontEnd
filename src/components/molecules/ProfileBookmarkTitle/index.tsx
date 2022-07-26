import React from 'react';

import Span from '@atoms/Span';
import UseLoginHooks from '@hooks/UseLogin';

import * as S from './styles';

interface ProfileBookmarkTitleProps {
  name: string;
  email: string;
}

function ProfileBookmarkTitle({ name, email }: ProfileBookmarkTitleProps) {
  const { UseLogout } = UseLoginHooks();

  const onClickLogout = () => {
    UseLogout();
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Span fontSize="1.4rem" fontWeight="700" className="nameSpan">
          {name}
        </Span>
        <Span>{email}</Span>
      </S.Wrapper>
      <div>
        <Span onClick={onClickLogout} cursor="pointer">
          로그아웃
        </Span>
      </div>
    </S.Container>
  );
}

export default ProfileBookmarkTitle;
