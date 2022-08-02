import React from 'react';

import Span from '@atoms/Span';
import { useSetRecoilState } from 'recoil';
import modalAtom, { muiAnchorEl } from '@recoil/modalAtom';
import { userLogout } from '@service/getUserApi';
import UseLoginHooks from '@hooks/UseLogin';
import * as S from './styles';

interface ProfileBookmarkTitleProps {
  name: string;
  email: string;
}

function ProfileBookmarkTitle({ name, email }: ProfileBookmarkTitleProps) {
  const setAnchorEl = useSetRecoilState(muiAnchorEl);
  const setModalContent = useSetRecoilState(modalAtom);
  const { ResetUserInfo } = UseLoginHooks();
  const logoutEvent = () => {
    userLogout();
    ResetUserInfo();
  };
  const onClickLogout = () => {
    setAnchorEl(null); // 헤더 팝업 닫기
    setModalContent({
      messages: ['로그아웃 하시겠습니까?'],
      submitButton: {
        onClick: logoutEvent,
        show: true,
      },
      cancelButton: {
        onClick() {},
        show: true,
      },
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
