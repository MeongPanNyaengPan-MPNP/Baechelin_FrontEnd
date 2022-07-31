import React from 'react';

import Span from '@atoms/Span';
import UseLoginHooks from '@hooks/UseLogin';
import { useSetRecoilState } from 'recoil';
import modalAtom, { muiAnchorEl } from '@recoil/modalAtom';
import * as S from './styles';

interface ProfileBookmarkTitleProps {
  name: string;
  email: string;
}

function ProfileBookmarkTitle({ name, email }: ProfileBookmarkTitleProps) {
  const { UseLogout } = UseLoginHooks();

  const setAnchorEl = useSetRecoilState(muiAnchorEl);
  const setModalContent = useSetRecoilState(modalAtom);
  const onClickLogout = () => {
    setAnchorEl(null); // 헤더 팝업 닫기
    setModalContent({
      messages: ['로그아웃 하시겠습니까?'],
      submitButton: { onClick: UseLogout },
    });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Span fontSize="1.4rem" fontWeight="700" className="nameSpan">
          {name}
        </Span>
        <Span fontSize="1.2rem">{email}</Span>
      </S.Wrapper>
      <div>
        <Span onClick={onClickLogout} cursor="pointer" fontSize="1.2rem">
          로그아웃
        </Span>
      </div>
    </S.Container>
  );
}

export default ProfileBookmarkTitle;
